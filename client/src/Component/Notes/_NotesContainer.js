import React from 'react'
import { Link, useRouteMatch } from "react-router-dom"

const NotesContainer = () => {
  const urm = useRouteMatch();
  return (
    <div className="col-10">
      <p>
        {urm.path === "/"
          ? "You are in the home page"
          : "You are in" + urm.params.noteID}
      </p>
    </div>
  )
}

export default NotesContainer;
