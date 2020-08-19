const express = require("express");
const app = express.Router();
const fs = require("fs");

//Creat storge dir if it doe'nt exist
if (!fs.existsSync(__dirname + "/../storage"))
  fs.mkdirSync(
    __dirname + "/../storage");

//Create storage file if it does'nt exist
if (!fs.existsSync(__dirname + "/../storage/notes.json"))
  fs.writeFileSync(
    __dirname + "/../storage/notes.json", "[]");
const notes = require("../storage/notes.json").map((note, noteid) => ({
  ...note,
  noteid
}));

const GetNoteById = NoteID => note.find(note => note.noteid === +NoteID);



//work with notes only if user is logged in
app.use((req, res, next) => {
  if (!req.session.User) {
    res.status(401).json("You need to login to work with notes!");
  } else {
    next();
    //Update the notes.json with the content of notes.
    fs.writeFileSync(
      __dirname + "/../storage/notes.json",
      JSON.stringify(notes)
    );
  }
});

//Show all notes.
app.get("/", (req, res) => {
  // Show all the notes.
  res.json(
    notes.filter(
      note =>
        !note.private ||
        (note.private && note.username === req.session.User.username)
    )
  );
})

//Create a new note.
app.post("/", (req, res) => {
  // Create a new note.
  // Check the POST request for all the required fields in req.body.
  if (
    req.body.title &&
    req.body.title.trim().length > 3 &&
    req.body.content &&
    req.body.content.trim().length > 3 &&
    typeof req.body.private === "boolean"
  ) {
    const { title, content, private } = req.body;
    const username = req.session.User.username;
    const editCount = 0,
      createdAt = (updatedAt = new Date());
    // Push the particular note.
    res.json(
      notes.push({
        username,
        title,
        content,
        private,
        editCount,
        createdAt,
        updatedAt
      }) - 1
    );
  } else {
    res.status(400).json("Sorry, you need both title and content.");
  }
});

//View users own notes.
app.get("/me", (req, res) => {
  res.json(notes.filter(note => note.username === req.session.User.username));
})

//View a Particular note.
app.get("/:noteId", (req, res) => {
  const noteId = +req.params.noteId;
  if (!GetNoteById(noteId) || !GetNoteById(noteId).username) {
    res.status(404).json("Note doesn't exist.");
  } else if (
    GetNoteById(noteId).private &&
    GetNoteById(noteId).username !== req.session.User.username
  ) {
    // Don't show others private notes!
    res.status(403).json("You don't have access to this note.");
  } else {
    res.json(GetNoteById(noteId));
  }
});
//Update a particular note.
app.post("/:noteId", (req, res) => {
  const noteId = +req.params.noteId;
  if (!GetNoteById(noteId) || !GetNoteById(noteId).username) {
    res.status(404).json("Note doesn't exist.");
  } else if (GetNoteById(noteId).username !== req.session.User.username) {
    // Don't give access to others' notes!
    res.status(403).json("You don't have access to edit or delete this note.");
  } else {
    let note = GetNoteById(noteId);
    if (
      req.body.title &&
      req.body.title.trim().length > 3 &&
      req.body.content &&
      req.body.content.trim().length > 3 &&
      typeof req.body.private === "boolean"
    ) {
      const { title, content, private } = req.body;
      const editCount = note.editCount + 1,
        updatedAt = new Date();
      // Update the particular note.
      GetNoteById(noteId) = {
        ...note,
        title,
        content,
        private,
        editCount,
        updatedAt
      };
      res.json(`Updated note #${noteId} successfully.`);
    } else {
      res.status(400).json("Sorry, you need both title and content.");
    }
  }
});
// Delete particular note.
app.delete("/:noteId", (req, res) => {
  const noteId = +req.params.noteId;
  if (!GetNoteById(noteId) || !GetNoteById(noteId).username) {
    res.status(404).json("Note doesn't exist.");
  } else if (GetNoteById(noteId).username !== req.session.User.username) {
    // Don't give access to others' notes!
    res.status(403).json("You don't have access to edit or delete this note.");
  } else {
    notes[noteId] = {
      username: null,
      title: null,
      content: null,
      private: true,
      editCount: null,
      createdAt: null,
      updatedAt: new Date()
    };
    res.json(`Note #${noteId} successfully deleted.`);
  }
});


module.exports = app;