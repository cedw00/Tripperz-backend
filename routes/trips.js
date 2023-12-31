var express = require("express");
var router = express.Router();

const User = require("../models/users");
const Trip = require("../models/trips");
const { checkBody } = require("../modules/checkBody");

router.get("/:token", async (req, res) => {
  const user = await User.findOne({ token: req.params.token });
  if (user) {
    Trip.find({ usersList: user._id }).then((data) => {
      if (data.length > 0) {
        res.json({ result: true, trips: data });
      } else {
        res.json({
          result: false,
          error: "You don't have any trips planned",
          trips: [],
        });
      }
    });
  } else {
    res.json({ result: false, error: "Invalid token" });
  }
});

router.get("/tripId/:_id", async (req, res) => {
    const trip = await Trip.findOne({ _id: req.params._id });
    if (trip) {
        console.log(1);
          res.json({ result: true, trip: trip });
        } else {
          res.json({
            result: false,
            error: "This trip does not exist in DB",
          });
        }
      });

router.post("/", async (req, res) => {
//   if (
//     !checkBody(req.body, ["start", "end", "duration", "dayDuration", "countryDest", "cityDest", "img"])
//   ) {
//     res.json({ result: false, error: "Missing or empty fields" });
//     return;
//   }

  const { token, start, end, duration, dayDuration, countryDest, cityDest, img, activitiesList, allSizes, tripperz } =
    req.body;
    console.log('activities', activitiesList);
  const user = await User.findOne({ token: token });
  if (user) {
    const users = [];
    users.push(user._id);
    const newTrip = new Trip({
      startDate: start,
      endDate: end,
      duration: duration,
      dayDuration: dayDuration,
      countryDest: countryDest,
      cityDest: cityDest,
      tripImage: img,
      activitiesList: activitiesList,
      allSizes: allSizes,
      usersList: users,
      tripperz: tripperz,
    });

    await newTrip.save();

    console.log('id', newTrip._id);
    for (let i = 0; i < tripperz.length; i++) {
        const otherUser = await User.findOne({ email: tripperz[i]})
        if (otherUser) {
            const userTrips = otherUser.tripsList;
            users.push(otherUser._id);
            userTrips.push(newTrip._id);
            await User.updateOne({ email: tripperz[i] }, { tripsList: userTrips })
        }
    };
    await Trip.updateOne({ _id: newTrip._id }, { usersList: users });
   
    const trips = user.tripsList;
    trips.push(newTrip._id);
    User.updateOne({ token: token }, { tripsList: trips }).then(
      (updatedUser) => {
        if (updatedUser.modifiedCount < 1) {
          res.json({ result: false, error: "Failed to update user" });
        }
      }
    );
   
    res.json({ result: true, trip: newTrip });
  } else {
    res.json({ result: false, error: "Invalid token" });
  }
});

router.put("/invite", async (req, res) => {
  const { users } = req.body;
  const trip = await Trip.findOne({ _id: req.body.id });
  if (trip) {
    for (const email of users) {
      User.findOne({ email: { $regex: new RegExp(email, "i") } }).then(
        (user) => {
          if (user) {
            const trips = user.tripsList;
            const users = trip.usersList;
            users.push(user._id);
            trips.push(trip._id);
            Trip.updateOne({ _id: trip._id }, { usersList: users }).then();
            User.updateOne(
              { email: { $regex: new RegExp(email, "i") } },
              { tripsList: trips }
            ).then();
          } else {
            res.json({ result: false, error: "User not found" });
          }
        }
      );
      User.findOne({ email: { $regex: new RegExp(email, "i") } })
        .populate("tripsList")
        .then();
    }
    Trip.findOne({ _id: trip._id })
      .populate("usersList")
      .then((updatedTrip) => {
        if (updatedTrip) {
          res.json({ result: true, trip: updatedTrip });
        }
      });
  } else {
    res.json({ result: false, error: "Trip not found" });
  }
});

router.put("/update", async (req, res) => {
  const trip = await Trip.findById({ _id: req.body._id });
  if (trip) {
    const { _id, activitiesList, allSizes } = req.body;
    Trip.findOneAndUpdate({ _id: _id }, { activitiesList: activitiesList, allSizes: allSizes }).then(
      () => {
        Trip.findById({ _id: req.body._id }).then((trip) => {
          res.json({ result: true, data: trip });
          return;
        });
      }
    );
  } else {
    res.json({ result: false, error: "Trip doesn't exist" });
  }
});

router.delete("/:tripId/:token", async (req, res) => {
  const { tripId, token } = req.params;
  const response = await Trip.deleteOne({ _id: tripId });
  if (response.deletedCount > 0) {
    User.findOne({ token: token }).then((user) => {
      if (user) {
        const index = user.tripsList.indexOf(tripId);
        user.tripsList.splice(index, 1);
        User.updateOne({ token: token }, { tripsList: user.tripsList }).then(
          (updatedUser) => {
            res.json({ result: true, user: updatedUser });
          }
        );
      } else {
        res.json({ result: false, error: "Invalid token" });
      }
    });
  } else {
    res.json({ result: false, error: "Failed to delete trip" });
  }
});

module.exports = router;
