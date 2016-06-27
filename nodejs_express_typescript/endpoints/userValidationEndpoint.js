"use strict";
var UserValidationEndpoint = (function () {
    function UserValidationEndpoint(router) {
        this.validateKey = function (data) {
            console.log(data);
            console.log("function in class is called");
        };
        // router.post("/login", function(req: express.Request, res: express.Response) {
        //     res.json({success: "first endpoint connnected"});
        // });
        // router.get('/signup', function (req: express.Request, res: express.Response) {
        //     console.log(req);
        //     res.json({message_post: 'made a post'});
        // });
    }
    return UserValidationEndpoint;
}());
exports.UserValidationEndpoint = UserValidationEndpoint;
