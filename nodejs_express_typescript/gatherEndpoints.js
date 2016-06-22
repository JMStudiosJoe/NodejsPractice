"use strict";
var express = require('express');
var router = express.Router();
var GatherEndpoints = (function () {
    function GatherEndpoints(router) {
        router.get("/hello", function (req, res) {
            res.json({ success: "hell ya" });
        });
    }
    return GatherEndpoints;
}());
exports.GatherEndpoints = GatherEndpoints;
