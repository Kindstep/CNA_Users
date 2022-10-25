const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const User = require('../models/user');


//Get all Users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

module.exports = router;