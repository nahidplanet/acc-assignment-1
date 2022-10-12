const express = require('express');
const randomRoute = express.Router();
const { randomUser } = require('../controller/random.controller');

// limitedData,



randomRoute.route("/")
    /**
     * Route description .
     * @apiMethod {get}/
     * @apiPath localhost:5000/api/v1/user/random/
     * @apiDescription get a random  user information
     * @apiPermission public
     * 
     * @apiHeader {string} content-type: application/json
     * 
     * @apiParam no parameter
     * 
     * @apiSuccess {object} single user information
     * 
     * @apiError {text} Route Not Found;
     */
    .get(randomUser);

module.exports = randomRoute;