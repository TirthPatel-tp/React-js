const mongoose = require('mongoose');
const { Schema } = mongoose;  
 

const NotesSchema = new Schema({
   user:{
      type: mongoose.Schema.Types.ObjectId, // it is kind of foregin key to link user data to the notes 
      ref: 'user' // using reference from taking last line of Models export name.
   },
   title: {
    type: String,
    required: true
   },

   description:{
    type: String,
    required: true,
   },

   tag: {
    type: String,
    default: "General"
   },

   date:{
    type: Date,
    default: Date.now
   }
  });

  module.exports = mongoose.model('notes', NotesSchema);