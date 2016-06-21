/// <reference path="typings/globals/express/index.d.ts" />
/// <reference path="typings/globals/body-parser/index.d.ts" />
"use strict";
//http://blog.geraldpereira.com/rest/crud/2015/09/10/nodejs-express-typescript.html
//https://basarat.gitbooks.io/typescript/content/docs/quick/browser.html
//http://blog.charto.net/node-js/Publishing-TypeScript-based-modules-on-npm/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var gatherEndpoints_1 = require("./gatherEndpoints");
var gather = new gatherEndpoints_1.GatherEndpoints();
gather.sayHi();
// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 8080;
var router = express.Router();
// test route
router.get('/', function (req, res) {
    res.json({ message: 'welcome' });
});
// prefixed all routes with /api
app.use('/api', router);
app.listen(port);
console.log('http://127.0.0.1:' + port + '/api');
