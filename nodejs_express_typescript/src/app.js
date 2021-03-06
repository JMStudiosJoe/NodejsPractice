//http://blog.geraldpereira.com/rest/crud/2015/09/10/nodejs-express-typescript.html
//https://basarat.gitbooks.io/typescript/content/docs/quick/browser.html
//http://blog.charto.net/node-js/Publishing-TypeScript-based-modules-on-npm/
"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var gatherEndpoints_1 = require("../gatherEndpoints");
// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 8080;
var router = express.Router();
var firstEndpoint = new gatherEndpoints_1.GatherEndpoints(router);
// test route
router.get('/', function (req, res) {
    console.log(req);
    res.json({ message: 'welcome to the get request' });
});
// prefixed all routes with /api
app.use('/api', router);
app.listen(port);
console.log('http://127.0.0.1:' + port + '/api');
