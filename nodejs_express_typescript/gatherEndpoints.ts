import * as express from 'express';
import {UserValidationEndpoint} from "./endpoints/userValidationEndpoint";

export class GatherEndpoints {
    
    constructor (router: express.Router) {//router is pass by reference so any changes to here will change it for app.ts

        router.get("/hello", function(req: express.Request, res: express.Response) {
            var userValidation = new UserValidationEndpoint(router);
            
            userValidation.validateKey("here is my key");
            res.json({success: "first endpoint connnected"});
        });
        router.post('/posting', function (req: express.Request, res: express.Response) {
            console.log(req);
            res.json({message_post: 'made a post'});
        });
    }




}

