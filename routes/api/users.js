const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route  POST api/users
// @desc   Register user
// @access Public
router.post('/', [
    check('username', 'Please include a valid username').exists(),
    check('password', 'Password must be at least five characters. PLease try again').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try{
        let user = await User.findOne({ username });
        if(user){
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }

         user = new User({
            username,
            password
         });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
             user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 36000 },
            (err, token) => {
            if(err) throw err;
                res.json({ token });
            }
        );
    } catch(err){
        console.log(err)
        res.status(500).send("Server error");
    }

});

module.exports = router;