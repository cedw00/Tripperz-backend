var express = require('express');
var router = express.Router();

const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  if (!checkBody(req.body, ['username', 'email', 'phone', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  const { username, email, phone } = req.body;
  const data = await User.findOne({ email: { $regex: new RegExp(email, 'i') } });
  if (data === null) {
    const hash = bcrypt.hashSync(req.body.password, 10);

    const newUser = new User({
      username: username,
      email: email,
      phoneNb: phone,
      country: null,
      birthday: null,
      gender: null,
      favoriteFoods: [],
      favoriteDestinations: [],
      hobbies: [],
      tripsList: [],
      password: hash,
      token: uid2(32),
    });

    newUser.save().then(newDoc => {
      res.json({ result: true, user: newDoc });
    });
  } else {
    res.json({ result: false, error: 'email is already used' });
  }
});

router.post('/signin', async (req, res) => {
  if (!checkBody(req.body, ['email', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  const { email, password } = req.body;
  const data = await User.findOne({ email: { $regex: new RegExp(email, 'i') } })
  if (data && bcrypt.compareSync(password, data.password)) {
    res.json({ result: true, user: data});
  } else {
    res.json({ result: false, error: 'User not found or wrong password' });
  }
});

router.get('/', async (req, res) => {
  const allUsers = await User.find();
  if (allUsers.length > 0) {
    res.json({ result: true, users: allUsers });
  } else {
    res.json({ result: false, error: 'No users saved in database' });
  }
});

router.get('/findUser/:email', async (req, res) => {
  let { email } = req.params;

  email = email.toLowerCase();
 
  const foundUser = await User.findOne({ email: { $regex: new RegExp('^' + email + '$', 'i') } });

  if (foundUser) {
    res.json({ result: true, email: foundUser });
  } else {
    res.json({ result: false, error: 'Oops! This person is not registered on Tripperz yet.' });
  }
});

module.exports = router;