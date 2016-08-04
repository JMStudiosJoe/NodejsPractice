"use strict";
var userValidationEndpoint_1 = require("./endpoints/userValidationEndpoint");
var GatherEndpoints = (function () {
    function GatherEndpoints(router) {
        router.get("/hello", function (req, res) {
            var userValidation = new userValidationEndpoint_1.UserValidationEndpoint(router);
            userValidation.validateKey("here is my key");
            res.json({ success: "first endpoint connnected" });
        });
        router.post('/posting', function (req, res) {
            console.log(req);
            res.json({ message_post: 'made a post' });
        });
    }
    return GatherEndpoints;
}());
exports.GatherEndpoints = GatherEndpoints;
