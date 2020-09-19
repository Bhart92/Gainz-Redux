const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');


// @route  GET api/auth
// @desc   Test rote
// @access Public
router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err){
        res.status(500).send('Server error');
    }
});

// @route  POST api/auth
// @desc   authenticate user and get token
// @access Public
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is requried').exists()
], async (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try{
        let user = await User.findOne({ email });
        if(!user){
            return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid credentials' }] });
        }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
            return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid credentials' }] });
            }

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
        res.status(500).send("Server error");
    }

});

// @route    DELETE api/auth
// @desc     delete  user 
// @access   Private
router.delete('/', auth, async (req, res) => {
    try {
      //remove user
      await User.findOneAndRemove({ _id: req.user.id });
  
        res.json({ msg: 'User Deleted' });
      res.json(profiles);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });
  

module.exports = router;