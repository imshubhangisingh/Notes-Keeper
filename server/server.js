//importing express library
const express = require("express");

//Importing morgan, cors and session.
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");

//Creating instance of the Express library to do our app.
const app = express();

//Defining a part for Express App to listen to.
const port = 3100;

//get routes.
const users = require("./routes/users");
const root = require("./routes/root");
const notes = require("./routes/notes");

//Added middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

//Use the routes.
app.use("/", root);
app.use("/api/users", users);
app.use("/api/notes", notes);

app.listen(port, () => {
  console.log("Successfully started the server on port " + port);
});