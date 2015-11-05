var express = require('express');
var bodyparser = require('body-parser');

// Create new express application
var app = express();

// Use Handlebars for templates
app.set('view engine', 'hbs');

// Log request info
app.use(function(req, res, next) {
  console.log('%s %s %s %s',
    new Date(), req.ip, req.path, req.get('User-Agent'));
  next();
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Enable basic parsing of <form> post bodies
app.use(bodyparser.urlencoded({
  extended: false
}));

// Store site-wide information for templates
app.locals.sitename = 'Express Boilerplate';
app.locals.source_url = 'https://github.com/unioncollege-webtech/express-boilerplate';


//
// Register application routes
//

// Respond to the base path
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Welcome!'
  });
});


// Start the server
var port = process.env.PORT || 3000;
var address = process.env.IP || '127.0.0.1'
app.listen(port, address, function() {
  console.log('%s listening at http://%s:%s',
    app.locals.sitename, address, port);
});