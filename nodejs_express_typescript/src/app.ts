

//http://blog.geraldpereira.com/rest/crud/2015/09/10/nodejs-express-typescript.html
//https://basarat.gitbooks.io/typescript/content/docs/quick/browser.html
//http://blog.charto.net/node-js/Publishing-TypeScript-based-modules-on-npm/

import * as express from 'express';
const app = express();
import * as bodyParser from 'body-parser';
import {GatherEndpoints} from "../gatherEndpoints";



// configure our app to use bodyParser(it let us get the json data from a POST)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



const port:number = 8080;
const router = express.Router();

var firstEndpoint = new GatherEndpoints(router);

// test route
router.get('/', function (req, res) {
    res.json({message: 'welcome'});
});

// prefixed all routes with /api
app.use('/api', router);

app.listen(port);
console.log('http://127.0.0.1:' + port + '/api');