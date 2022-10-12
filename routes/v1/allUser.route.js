const express = require('express');
const { allUserByLimit, allUser } = require('../controller/allUser.controller');

const allUsers = express.Router();

allUsers.route("/")
        /**
         * Route description .
         * @apiMethod {get}/
         * @apiPath localhost:5000/api/v1/user/all;
         * @apiDescription get all  user information
         * @apiPermission public
         * 
         * @apiHeader {string} content-type: application/json
         * 
         * @apiParam no parameter
         * 
         * @apiSuccess {object} all user information
         * 
         * @apiError {text} id not found
         */
        
    .get(allUser);


        /**
        * Route description .
        * @apiMethod {get}/
        * @apiPath localhost:5000/api/v1/user/all/3
        * @apiDescription set limit value as like as id and get some data;
        * @apiPermission public
        * 
        * @apiHeader {string} content-type: application/json
        * 
        * @apiParam limit data params
        * 
        * @apiSuccess {object} conditional user information
        * 
        * @apiError {text} id not found;
        */
allUsers.route("/:id").get(allUserByLimit);
module.exports = allUsers; 