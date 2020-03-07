const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Put all API endpoints under '/api'
app.post('/api/validatelogin', (req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;

  // Rudimentary validity check
  const is_valid = (
    email === "aw88@students.uwf.edu" && password === "password1" ?
    "true" :
    "false"
  );
  
  // Return as json
  res.json(is_valid);

});

app.post('/api/validatesignup', (req, res) => {
  //checks to see if inputted login info is valid for signup
  //check if info meets requirements
  //if so, add to database and return success
  //else, return error msg
});

app.post('/api/addPost', (req, res) => {
  //adds post to the database
  //check if all required data for posting is present
  //if so, add post to database and return success
  //else, return failure
});

app.post('/api/getPosts', (req, res) => {
  //retrieve posts from the database
  //return posts
});

app.post('/api/addComment', (req, res) => {
  //adds a comment to a post
  //associate comment with corresponding post, somehow
  // the somehow is to use foreign key relationship between comment and post
  // comment will have postid as a foreign key
  //add post to database
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
