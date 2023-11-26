import { useState } from 'react';
import NoteContext from './NoteContext';
import { json } from 'react-router-dom';

function NoteState(props) {
  const host = "http://localhost:5000";


  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  // Get all notes
  const getNotes = async () => {

    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MmFiYTRhYmQ4YzZjODA4YTVmMmY1In0sImlhdCI6MTcwMDA4MTM3OH0.cv4KGlOYjF4P-Gl1VcwdPMoWOp_0Nth30BaCJzUWs6E'
      }
    });
    const json = await response.json()
    // console.log(json)
    setNotes(json)
  }



  // Add a note
  const addNote = async (title, description, tag) => {

    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MmFiYTRhYmQ4YzZjODA4YTVmMmY1In0sImlhdCI6MTcwMDA4MTM3OH0.cv4KGlOYjF4P-Gl1VcwdPMoWOp_0Nth30BaCJzUWs6E'
      },
      body: JSON.stringify({ title, description, tag })
    });

    // const json = response.json();

    console.log("Adding a new notes")
    const note = {
      "_id": "655a5sfgsjknjbnf8f345b0bd28ac85005",
      "user": "6552aba4abd8c6c808a5f2f5",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-11-19T19:18:39.150Z",
      "__v": 0
    };
    setNotes(notes.concat(note))

  }


  // Delete a Note
  const deleteNote = async (id) => {
    console.log("deleting a note " + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MmFiYTRhYmQ4YzZjODA4YTVmMmY1In0sImlhdCI6MTcwMDA4MTM3OH0.cv4KGlOYjF4P-Gl1VcwdPMoWOp_0Nth30BaCJzUWs6E'
      }
    });
    const json = response.json();
    console.log(json)
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1MmFiYTRhYmQ4YzZjODA4YTVmMmY1In0sImlhdCI6MTcwMDA4MTM3OH0.cv4KGlOYjF4P-Gl1VcwdPMoWOp_0Nth30BaCJzUWs6E'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;