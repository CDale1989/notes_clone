import React, { useEffect, useState } from 'react'
// import notes from '../assets/Data'
import ListItem from '../components/ListItem'

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
  },[])

  const getNotes = async () => {
    let response = await fetch("http://localhost:8000/notes/");
    let data = await response.json()
    console.log(data)
    setNotes(data)
  }

  return (
    <div>
      <div className="notes">
        <div className="notes-header">
          <h2 className="notes-title">&#9782;Notes</h2>
          <p className="notes-count">{notes.length}</p>
        </div>
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
}

export default NotesListPage;