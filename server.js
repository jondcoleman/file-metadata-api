'use strict';
var express = require('express');
var routes = require('./app/index.js');

var app = express();
require('dotenv').load();

app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening on port 3000...');
});
