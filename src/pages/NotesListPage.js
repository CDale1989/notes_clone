import React from 'react'
import notes from '../assets/Data'
import ListItem from '../components/ListItem'

const NotesListPage = () => {
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