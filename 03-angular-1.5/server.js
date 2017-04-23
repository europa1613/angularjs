var express = require('express'),
    app = express(),
    path = require('path')
    favicon = require('serve-favicon');

var port = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname + '/favicon.ico')));
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});

var server = app.listen(port, function(err) {
    console.log('Express Server running at port: %s', server.address().port);
});
