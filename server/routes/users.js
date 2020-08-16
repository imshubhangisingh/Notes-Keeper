const express = require("express");
const app = express.Router();

const users = [
  { username: "Manswi", password: "manswi", fullname: "Manswi Shah" },
  { username: "Saral", password: "saral", fullname: "Saral Agarwal" }
];

//Disallow users root access
app.get("/", (req, res) => {
  res.json("Sorry, this route is not accessible!");
});
app.post("/", (req, res) => {
  res.json("Sorry, this route is not accessible!");
});

//Users login
app.get("/login", (req, res) => {
  if (!req.session.User) {
    res.status(405).json("GET requests not supported.");
  } else {
    res.json(req.session.User);
  }
});
app.post("/login", (req, res) => {
  const matchedUser = {
    ...users.find(
      user =>
        user.username === req.body.username &&
        user.password === req.body.password
    )
  };
  if (matchedUser.username && matchedUser.username.length > 3) {
    delete matchedUser.password;
    req.session.User = matchedUser;
    res.json(matchedUser);
    //res.json("User logged in successfully");
  } else {
    delete req.session.User;
    res.status(401).json("Username or password is wrong.");
  }
});

//Users Logout
app.get("/logout", (req, res) => {
  res.status(405).json("GET requests not supported.");
});
app.post("/logout", (req, res) => {
  req.session.User = null;
  res.json("User successfully logged out.");
});


//Creat new user
app.get("/new", (req, res) => {
  // 405 - req not supported
  res.status(405).json("GET request not supported")
});
app.post("/new", (req, res) => {
  if (
    req.body.username &&
    req.body.username.trim().length > 3 &&
    req.body.password &&
    req.body.password.trim().length > 3 &&
    req.body.fullname &&
    req.body.fullname.trim().length > 3
  ) {
    if (users.filter(user => user.username === req.body.username).length > 0) {
      // User already exists.
      res.status(409).json("User already exists.");
    } else {
      // All good.
      users.push({
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname
      });
      res
        .status(201)
        .json(
          "User " + req.body.username + " created successfully. Please login."
        );
    }
  } else {
    res
      .status(400)
      .json(
        "Send all three username, password, fullname for creating a user and each of them should be at least 4 characters long."
      );
  }
});

//CRUD on particular user
app.get("/:index", (req, res) => {
  if (req.params.index > users.length - 1) {
    res.status(404).json("User doesn't exist.");
  } else {
    if (!req.session.User) {
      res.status(401).json("You need to login to work with users!");
    } else {
      const user = { ...users[req.params.index] };
      delete user.password;
      res.json(user);
    }
  }
});
app.post("/:index", (req, res) => {
  res.status(405).json("POST requests not supported.");
});
app.put("/:index", (req, res) => {
  // Update the specific user.
  res.json("ToDo.");
});
app.delete("/:index", (req, res) => {
  // Get the corresponding note from the list.
  res.json("Won't do.");
});


module.exports = app;