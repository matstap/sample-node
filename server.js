'use strict';

// include application modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(req, res) {
  console.log('I accessed the home page');
  res.sendFile('./public/index.html');
});

app.listen(PORT, function() {
  console.log('currently listening on:', PORT);
});
