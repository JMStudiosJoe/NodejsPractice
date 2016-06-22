import * as express from 'express';
const router = express.Router();

class GatherEndpoints {

    constructor (router: express.Router) {//router is pass by reference so any changes to here will change it for app.ts

        router.get("/hello", function(req: express.Request, res: express.Response) {
            res.json({success: "first endpoint connnected"});
        })
    }




}
export {GatherEndpoints};
