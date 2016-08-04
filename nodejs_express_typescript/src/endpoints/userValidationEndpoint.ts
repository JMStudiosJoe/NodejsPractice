import * as express from 'express';

export class UserValidationEndpoint {
    constructor (router: express.Router) {//router is pass by reference so any changes to here will change it for app.ts

        // router.post("/login", function(req: express.Request, res: express.Response) {
        //     res.json({success: "first endpoint connnected"});
        // });
        // router.get('/signup', function (req: express.Request, res: express.Response) {
        //     console.log(req);
        //     res.json({message_post: 'made a post'});
        // });
    }
    validateKey = function(data: string) {
        console.log(data);
        console.log("function in class is called");
    }
}