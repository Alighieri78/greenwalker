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

  const is_valid = (
    email == "aw88@students.uwf.edu" && password == "password1" ?
    "true" :
    "false"
  );
  
  // Return them as json
  res.json(is_valid);

});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
