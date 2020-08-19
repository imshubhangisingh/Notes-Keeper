import Axios from "axios";

export const GetAllNotes = () => Axios.get("/api/notes");

export const DeleteNote = NoteID => Axios.delete("/api/notes/" + NoteID);