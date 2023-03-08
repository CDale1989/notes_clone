import React from 'react'
import notes from "../assets/Data";
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'

const NotePage = () => {
    const {id} = useParams();
    const note = notes.find(note => note.id === Number(id))
    console.log("note:", note)

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <BsArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea value={note?.body}>
      </textarea>
    </div>
  );
}

export default NotePage;