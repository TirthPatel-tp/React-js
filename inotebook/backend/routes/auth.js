const express = require('express');
const User = require("../models/User");
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Tirthishero'

// ROUTE: 1, Create a User using:POST "/api/auth/createuser"  No login required
router.post('/createuser', [
  //this will show if the name, email, password is not match by requirement
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter a valid password').isLength({ min: 5 }),
], async (req, res) => {

  // If there are errors, return Bad requrest and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  try {
    // Check whether the user with same email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Email already exists" })
    }

    const salt = await bcrypt.genSalt(4);  // Generate salt of 4 character
    const secPass = await bcrypt.hash(req.body.password, salt)   // adding the salt after the password

    // Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });

    const data = {
      user: {
        id: user.id
      }
    }

    // generate authToken with the jwt files
    const authToken = jwt.sign(data, JWT_SECRET)

    // will send the authToken 
    res.json({ authToken })

    // // Will send the user detail
    // res.json(user); 
  } catch (error) {
    // Send the user detail
    console.error(error.message);
    // If there is any mistake in code then the server error will be send 
    res.status(500).json({ error: 'Server error' });
  }

});


// ROUTE: 2, Authenticate a User using: POST "/api/auth/login"  No login required

router.post('/login', [
  //this will show if the  email, password is not match by requirement   
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists()
], async (req, res) => {

  // If there are errors, return Bad requrest and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    // Will find the user in the database
    let user = await User.findOne({ email });
    // If there is no user with this email then
    if (!user) {
      return res.status(400).json({ error: "Please try to login with correct credentials!!!" })
    }

    // Compare the password in database
    const passwordCompare = await bcrypt.compare(password, user.password);
    // If it doesn't match
    if (!passwordCompare) {
      return res.status(400).json({ error: "Please try to login with correct credentials!!!" })
    }

    const data = {
      user: {
        id: user.id
      }
    }
    // generate the authtoken
    const authToken = jwt.sign(data, JWT_SECRET);
    // send the authtoken
    res.json({ authToken })

  } catch (error) {
    // Send the user detail
    console.error(error.message);
    // If there is any mistake in code then the server error will be send 
    res.status(500).json({ error: 'Server error' });
  }


});


// ROUTE: 3, Get logged in User details using: POST "/api/auth/getuser"  login required
router.post('/getuser',fetchuser, async (req, res) => {

  // If there are errors, return Bad requrest and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password") // It will find user detail with id but it will not show password 
    res.send(user)
  } 
  
  catch (error) {
    // Send the user detail
    console.error(error.message);
    // If there is any mistake in code then the server error will be send 
    res.status(500).json({ error: 'Server error' });
  }

})

module.exports = router