const express = require('express');
const User = require("../models/User");
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');

const JWT_SECRET= 'Tirthishero'

// Create a User using:POST "/api/auth/createuser"  No login required
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
    const secPass = await bcrypt.hash(req.body.password , salt)   // adding the salt after the password

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
    const authToken = jwt.sign(data, JWT_SECRET)
    res.json({authToken})

    // // Will send the user detail
    // res.json(user); 
  } catch (error) {
    // Send the user detail
    console.error(error.message); 
    // If there is any mistake in code then the server error will be send 
    res.status(500).json({ error: 'Server error' }); 
  }

});



module.exports = router