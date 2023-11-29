import React, { useContext, useEffect, useRef } from 'react'
import noteContext from '../context/notes/NoteContext';
import Noteitems from './Noteitems';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext); // assigning context as noteContext
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  },[])

  const ref= useRef(null)
  const updateNote = (note) => {
    ref.current.click();
  }
  return (
    <>
      <AddNote />  {/* Will bring the structure for add note   */}

      <button ref={ref} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"  aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <h1> Your notes</h1>
        {notes.map((note) => {   // will bring note from noteitems.js 
          return <Noteitems key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes