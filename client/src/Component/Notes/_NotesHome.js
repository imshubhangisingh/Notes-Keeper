import React from 'react'
import { Link } from "react-router-dom"

const NotesHome = ({ is404 }) => {
  return (
    <div>
      {is404 ? (
        <div className="text-center">
          <div className="alert alert-danger">Note not found!</div>
          <Link to="/" className="btn btn-info tbn-sm">Back to Home</Link>
        </div>
      ) : (
          <p>Welcome, to Notes! Click on the notes to view them.</p>)
      }
    </div>
  )
}

export default NotesHome;
