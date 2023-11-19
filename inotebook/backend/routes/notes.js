const express = require('express');
const router = express.Router()
var fetchuser = require('../middleware/fetchuser');
const Notes = require("../models/Notes");
const { body, validationResult } = require('express-validator');





// ROUTE: 1, Get All Notes using: GET "/api/notes/fetchallnotes"  login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id }) // finding all the notes using id
        if (!notes) {
            res.status(400).send("Not Found")
        }
        res.json(notes)
    } catch (error) {
        // Send the user detail
        console.error(error.message);
        // If there is any mistake in code then the server error will be send 
        res.status(500).json({ error: 'Server error' });
    }



})


// ROUTE: 2, Add a new notes using: POST "/api/notes/addnote"  login required
router.post('/addnote', fetchuser, [
    //this will validate the min... requirements
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 })
],
    async (req, res) => {

        try {
            const { title, description, tag, } = req.body;
            // If there are errors, return Bad requrest and the error
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Notes({
                title, description, tag, user: req.user.id
            })
            const savedNote = await note.save()

            res.json(savedNote)
        } catch (error) {
            // Send the user detail
            console.error(error.message);
            // If there is any mistake in code then the server error will be send 
            res.status(500).json({ error: 'Server error' });
        }
    })

// ROUTE: 3, update an existing note using: PUT "/api/notes/updatenote"  login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        //  create a new note
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // find the note to be updated
        let note = await Notes.findById(req.params.id) // finding the not by note id which is provided
        if (!note) { res.status(400).send("Not Found") } // if there is no note
        // if the user id and the id of the create of is not match the we will not allow himS
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed!!!");
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        // Send the user detail
        console.error(error.message);
        // If there is any mistake in code then the server error will be send 
        res.status(500).json({ error: 'Server error' });
    }

})

// ROUTE: 4, delete an existing note using: DELETE "/api/notes/deletenote"  login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // find the note to be delete
        let note = await Notes.findById(req.params.id) // finding the not by note id which is provided
        if (!note) { res.status(400).send("Not Found") } // if there is no note


        // if the user id and the id of the create of is not match the we will not allow him to delete
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed!!!");
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Succes": "Note has been deleted", note: note });

    } catch (error) {
        // Send the user detail
        console.error(error.message);
        // If there is any mistake in code then the server error will be send 
        res.status(500).json({ error: 'Server error' });
    }

})
module.exports = router