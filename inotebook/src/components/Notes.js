import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitems from './Noteitems';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext); // assigning context as noteContext
  const { notes, getNotes } = context;
  useEffect(()=>{
    getNotes()
  })
  return (
    <>    
      <AddNote />  {/* Will bring the structure for add note   */}
      <div className='row my-3'>
        <h1> Your notes</h1>
        {notes.map((note) => {   // will bring note from noteitems.js 
          return <Noteitems key={note._id} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes