import express = require('express');// Create a new express application instance
import { Coche } from './Coche';
const app: express.Application = express();
app.get('/', function (req, res) {
    var miAuto = new Coche('land rover -3040');
    console.log("mi gran cochecito es:" + miAuto.getMarca());
    res.send('Hello World!');
}); app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});