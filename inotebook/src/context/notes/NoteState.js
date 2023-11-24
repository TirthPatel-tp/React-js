import { useState } from 'react';
import NoteContext from './NoteContext';

function NoteState(props){
   const notesInitial=[
    {
      "_id": "655a5f8f345b0bd28ac85005",
      "user": "6552aba4abd8c6c808a5f2f5",
      "title": "My title",
      "description": "please wake me up early",
      "tag": "personal",
      "date": "2023-11-19T19:18:39.150Z",
      "__v": 0
    },
    {
      "_id": "655a5f8f345b0bd28ac85005",
      "user": "6552aba4abd8c6c808a5f2f5",
      "title": "My title",
      "description": "please wake me up early",
      "tag": "personal",
      "date": "2023-11-19T19:18:39.150Z",
      "__v": 0
    },
    {
      "_id": "655a5f8f345b0bd28ac85005",
      "user": "6552aba4abd8c6c808a5f2f5",
      "title": "My title",
      "description": "please wake me up early",
      "tag": "personal",
      "date": "2023-11-19T19:18:39.150Z",
      "__v": 0
    },
    {
      "_id": "655a5f8f345b0bd28ac85005",
      "user": "6552aba4abd8c6c808a5f2f5",
      "title": "My title",
      "description": "please wake me up early",
      "tag": "personal",
      "date": "2023-11-19T19:18:39.150Z",
      "__v": 0
    },
    {
      "_id": "655a5f8f345b0bd28ac85005",
      "user": "6552aba4abd8c6c808a5f2f5",
      "title": "My title",
      "description": "please wake me up early",
      "tag": "personal",
      "date": "2023-11-19T19:18:39.150Z",
      "__v": 0
    }
  ]
  const [notes,setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;