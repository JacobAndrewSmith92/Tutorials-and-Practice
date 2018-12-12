const express = require('express');
const db = require('./db/db');
const bodyParser = require('body-parser');
const router = require('./routes/index.js')

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function() {
  router
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});


