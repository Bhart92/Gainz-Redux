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
        console.log(user);

        user.savedWorkoutList.push(...workouts);
        await user.save();
    } catch (err) {
        
    }
});

module.exports = router;