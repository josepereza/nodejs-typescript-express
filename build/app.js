"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express"); // Create a new express application instance
var Coche_1 = require("./Coche");
var app = express();
app.get('/', function (req, res) {
    var miAuto = new Coche_1.Coche('land rover -3040');
    console.log("mi gran cochecito es:" + miAuto.getMarca());
    res.send('Hello World!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
