import React from 'react';
import { Link } from "react-router-dom";

const NoteContent = ({ Note }) => {
  return (
    // <pre className="border rounded bg-light p-3">
    //   {JSON.stringify(Note, null, 2)}</pre>
    <div className="Notescontainer-Content">
      <header>
        <h3>{Note.title}</h3>
        <div className="Author">
          <p>Written by <em>{Note.username}</em> on <em>{Note.createdAt}</em>.
          <br></br>Last updated on <em>{Note.updatedAt}</em>.
          </p>
        </div>
      </header>
      <article className="border rounded p-3 bg-light">
        {Note.content}
      </article>
      <Link
        to="/" className="btn btn-sm btn-info mt-3">
        Back to Home
      </Link>
    </div>
  )
}

export default NoteContent;
