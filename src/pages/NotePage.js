import React, { useEffect, useState } from 'react'
// import notes from "../assets/Data";
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'

const NotePage = () => {
    const {noteId} = useParams()
    const [note, setNote] = useState(null);
    console.log(noteId)

    useEffect(() => {
      getNote()
      
    },[noteId])

    const getNote = async () => {
      let response = await fetch(`http://localhost:8000/notes/${noteId}`)
      console.log(noteId)
      let data = await response.json()
      setNote(data)
      console.log(data)
    }

    // const note = notes.find(note => note.id === Number(id))

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <BsArrowLeft />
          </Link>
        </h3>
      </div>

      {note ? (
        <div className="note-body">
          <p>{note.body}</p>
        </div>
      ) : (
        <div>Loading note...</div>
      )}
    </div>
  );
  
}

export default NotePage;