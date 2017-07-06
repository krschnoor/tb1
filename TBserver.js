var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/')
require('./models/accountModel.js')
var app = express();
app.engine('.html', require('ejs').renderFile);
app.set('views', __dirname + "/views");
app.set('view engine','html')
app.use(bodyParser());
require('./TBRoutes.js')(app);
app.listen(80);