const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route  POST api/workouts
// @desc   Save User workout list to DB
// @access Private
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

// @route  GET api/workouts
// @desc   Load users saved workouts
// @access Private
router.get('/', [auth], async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    } catch (err) {
        res.status(500).send("Server error");
    }
});

// @route  PUT api/workouts
// @desc   Clear User workout List in DB
// @access Private
router.put('/', [auth], async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id });
        user.savedWorkoutList = [];
        await user.save();
        res.json(user.savedWorkoutList)
    } catch (err) {
        res.status(500).send("Server error");
    }

});

module.exports = router;