import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitems from './Noteitems';

const Notes = () => {
    const context = useContext(noteContext); // assigning context as noteContext
    const {notes,setNotes} =context;
  return (
    <div className='row my-3'>
        <h1> Your notes</h1>
        {notes.map((note)=>{   // will bring note from noteitems.js 
          return <Noteitems note={note}/>
        })}
      </div>
  )
}

export default Notes