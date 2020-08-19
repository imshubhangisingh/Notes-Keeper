import React from 'react';
import { useRouteMatch } from "react-router-dom";
import NotesHome from './_NotesHome';
import NoteContent from './Note';

const NotesContainer = ({ Notes, DelNote }) => {
  const urm = useRouteMatch();
  const isHome = urm.path === "/";

  const Note = !isHome ? Notes.find(
    note => note.noteid === +urm.params.NoteID.replace("note-", "")
  )
    : null;

  return (
    <div className="col-10">
      {!isHome && Note ? <NoteContent DelNote={DelNote} Note={Note} /> : <NotesHome />}
    </div>
  )
}

export default NotesContainer;
