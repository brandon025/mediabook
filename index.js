var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var _ = require('lodash');

// Create the application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, 'public')));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Default route
app.get('/', function(req, res){
  res.sendfile('./index.html');
});

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect("mongodb://localhost/meanapp");
mongoose.connection.once('open', function() {

  // Load the models.
  app.models = require('./server/models/index');

  // Load the routes.
  var routes = require('./server/routes');
  _.each(routes, function(controller, route) {
    console.log("configuring route: " + route);
    app.use(route, controller(app, route));
  });

  console.log('Listening on port ' + process.env.PORT ? process.env.PORT : 3000);
  app.listen(process.env.PORT || 3000);
});
