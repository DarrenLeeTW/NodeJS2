var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.end('hello world');

    } else if (req.url == '/nodejs') {
        res.end('hello nodejs');
    } else
        res.end('Invalid Request!');

});

server.listen(5000);
console.log("server is running http://127.0.0.1:5000/")