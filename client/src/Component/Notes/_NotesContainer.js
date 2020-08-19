import React from 'react';
import { useRouteMatch } from "react-router-dom";

const NotesContainer = ({ Notes }) => {
  const urm = useRouteMatch();
  return (
    <div className="col-10 p-3">
      <pre className="border rounded bg-light">
        {JSON.stringify({ Note: Notes[+urm?.params?.NoteID?.replace("note-", "")], urm }, null, 2)}
      </pre>
    </div>
  )
}

export default NotesContainer;
