import React from 'react'
import { Link } from "react-router-dom"

const NotesHome = ({ is404, Deleted }) => {
  return (
    <section className="NotesContainer-Content">
      {is404 ? (
        <header className="text-center">
          <h4 className="text-left mb-3">
            {Deleted ? "Deleted!" : "Not Found!"}
          </h4>
          <div className={"alert alert-" + (Deleted ? "success" : "danger")}>
            {Deleted ? "The note has been successfully deleted" : "Error! Note not found"}
          </div>
          <Link to="/" className="btn btn-info tbn-sm">
            Back to Home
          </Link>
        </header>
      ) : (
          <p>Welcome, to Notes! Click on the notes to view them.</p>)
      }
    </section>
  )
}

export default NotesHome;
