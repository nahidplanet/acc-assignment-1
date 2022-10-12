const express = require('express');
const { userDeleteById } = require('../controller/userDelete.controller');
const userDelete = express.Router()


userDelete.route("/:id")
    /**
                * Route description .
                * @apiMethod {delete}/
                * @apiPath localhost:5000/api/v1/user/delete/3
                * @apiDescription delete a single user an get others user
                * @apiPermission public
                * 
                * @apiHeader {string} content-type: application/json
                * 
                * @apiParam yes! set a parameter 
                * 
                * @apiSuccess {object} get others user 
                * 
                * @apiError {text} id Not Found
                */
    .delete(userDeleteById)


module.exports = userDelete;