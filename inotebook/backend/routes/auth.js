const express = require('express');
const User = require("../models/User");
const router = express.Router()
const { body, validationResult } = require('express-validator');


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
    // Create a new user
    user = await User.create({    
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    // Will send the user detail
    res.json(user); 
  } catch (error) {
    // Send the user detail
    console.error(error.message); 
    // If there is any mistake in code then the server error will be send 
    res.status(500).json({ error: 'Server error' }); 
  }

});



module.exports = router