import React from 'react';
import { Link } from "react-router-dom";

const NoteContent = ({ Note }) => {
  console.log(Note);
  return (
    <section
      className={"NotesContainer-Content" + (Note.private ? " private" : "")}>
      <header>
        <h3>{Note.title}</h3>
        <div className="Author">
          <p>Written by <em>{Note.username}</em> on <em>{Note.createdAt}</em>.
          <br></br>Last updated on <em>{Note.updatedAt}</em>.
          {Note.editCount > 0
              ? ` This note was edited ${Note.editCount} time${Note.editCount === 1 ? "" : "s"}.` : ""}
          </p>
        </div>
      </header>
      <article className="border rounded p-3">
        {Note.content}
      </article>
      <Link
        to="/" className="btn btn-sm btn-info mt-3">
        Back to Home
      </Link>
    </section>
  )
}

export default NoteContent;
