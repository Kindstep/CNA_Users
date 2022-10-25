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

//Register User
router.post('/', async (req, res) => {
    try {

        const hashedPass = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPass,
        });

        const newUser = await user.save();

        res.send(newUser);

    } catch (error) {
        res.status(500).send({ msg: error.message });
    }

});


module.exports = router;