const express = require('express');
const { userUpdateByBody } = require('../controller/userUpdate.controller');

const userUpdate = express.Router();

userUpdate.route("/:userId")
             /**
             * Route description .
             * @apiMethod {patch}/
             * @apiPath localhost:5000/api/v1/user/update/6
             * @apiDescription update a single user 
             * @apiPermission public
             * 
             * @apiHeader {string} content-type: application/json
             * @body {object} set a single object
             * 
             * @apiParam yes! set a parameter 
             * 
             * @apiSuccess {object} single updated object return
             * 
             * @apiError {text} id Not Found
             * @apiError {text} set a object please
             */
    .patch(userUpdateByBody);




module.exports = userUpdate;