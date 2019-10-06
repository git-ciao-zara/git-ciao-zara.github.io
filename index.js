console.log("Server is working");
var express = require('express');
var app = express();
var server = app.listen(3000,listening)

app.use(express.static('public'))

function listening(){
  console.log('listening...');
}
