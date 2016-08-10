
import express = require('express');
import bodyParser = require('body-parser');

//import * as bodyParser from 'body-parser';
//import {GatherEndpoints} from "./gatherEndpoints";
//import * as express from 'express';
import GatherEndpoints = require("./gatherEndpoints");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port:number = 8080;
const router = express.Router();


var firstEndpoint = GatherEndpoints.constructor(router);

// test route
router.get('/', function (req: express.Request, res: express.Response) {
    console.log(req);
    res.json({message: 'welcome to the get request'});
});


// prefixed all routes with /api
app.use('/api', router);

app.listen(port);
console.log('http://127.0.0.1:' + port + '/api');


//http://blog.geraldpereira.com/rest/crud/2015/09/10/nodejs-express-typescript.html
//https://basarat.gitbooks.io/typescript/content/docs/quick/browser.html
//http://blog.charto.net/node-js/Publishing-TypeScript-based-modules-on-npm/
