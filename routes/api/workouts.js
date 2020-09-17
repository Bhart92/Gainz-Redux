const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// Save User workout list to DB
router.post('/', [auth], async (req, res) => {
    const { workouts } = req.body;
    try {
        const user = await User.findOne({ _id: req.user.id });
        user.savedWorkoutList.push(...workouts);
        await user.save();
        res.json(user.savedWorkoutList)

    } catch (err) {
        console.log(err)
        res.status(500).send("Server error");
    }
});
//Load users saved workouts
router.get('/', [auth], async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

            console.log(user)
        res.json(user)

    } catch (err) {
        console.log(err)
        res.status(500).send("Server error");    }

});
//Clear User workout List in DB
router.put('/', [auth], async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        user.savedWorkoutList = [];
        await user.save();
        res.json(user.savedWorkoutList)

    } catch (err) {
        console.log(err)
        res.status(500).send("Server error");
    }

});
module.exports = router;