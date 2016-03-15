'use strict';
var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000;

app.use('/', express.static('www/'));

app.listen(port, function() {
  console.log('Listening on ', port);
});
