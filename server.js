'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer')
var upload = multer()

var app = express();
require('dotenv').load();

app.use('/public', express.static(process.cwd() + '/public'));



 app.get('/', function (req, res) {
       res.sendFile(process.cwd() + '/public/index.html');
    });

app.post('/upload', upload.single('file'), function(req, res) {
    console.log(req.file);
    res.json({
      fileName: req.file.originalname,
      size: req.file.size
    })
  });

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening on port 3000...');
});
