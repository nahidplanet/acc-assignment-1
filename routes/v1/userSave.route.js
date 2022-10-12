const express = require('express');
const { newUserAdd } = require('../controller/userSave.controller');

const userSave = express.Router();

userSave.route("/")
            /**
             * Route description .
             * @apiMethod {post}/
             * @apiPath localhost:5000/api/v1/user/save/
             * @apiDescription save a new user information
             * @apiPermission public
             * 
             * @apiHeader {string} content-type: application/json
             * @body {object} all field is require
             * 
             * @apiParam no parameter
             * 
             * @apiSuccess {object} all user information
             * 
             * @apiError {text} Route Not Found
             * @apiError {text} all field is required
             */
    .post(newUserAdd);

module.exports = userSave;