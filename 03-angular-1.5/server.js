var express = require('express'),
    app = express(),
    path = require('path')
    favicon = require('serve-favicon');

var port = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname + '/favicon.ico')));
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/')); // '/' will serve the lib folder for index.html to use

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});

//WRONG
/*app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/about/about.html'))
});*/

var server = app.listen(port, function(err) {
    console.log('Express Server running at port: %s', server.address().port);
});
