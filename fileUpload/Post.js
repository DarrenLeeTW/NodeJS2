﻿var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/process_post', urlencodedParser, function (req, res) {
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    console.log('server is running.http://127.0.0.1:8081/')
    //http://127.0.0.1:8081/index.html

})