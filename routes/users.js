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
      phone: phone,
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
      res.json({ result: true, token: newDoc.token });
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
    res.json({ result: true, token: data.token });
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

router.get('/access/:token', async (req, res) => {
  const user = await User.findOne({ token: req.params.token });
  if (user) {
    res.json({ result: true, user: user });
  } else {
    res.json({ result: false, error: 'Invalid token' })
  }
})

module.exports = router;