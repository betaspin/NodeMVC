/**
 * Created by Jérôme Lamy on 15/03/17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes ======================================================================
require('./config/routes.js')(app);

// server
var port = process.argv[2] || 3000;
app.listen(port, function(){});

exports = module.exports = app;