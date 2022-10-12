const express = require('express');
const { bulkUpdateByIds } = require('../controller/bulkUpdateByIds.controller');
const bulkUpdate = express.Router();

bulkUpdate.route("/")
    /**
     * Route description .
     * @apiMethod {patch}/
     * @apiPath localhost:5000/api/v1/user/bulk-update
     * @apiDescription update multiple user data;
     * @apiPermission public
     * 
     * @apiHeader {string} content-type: application/json
     * @body {Array of object} like :
     *   [
            {"id":2,"name":"nahid","address":"dhaka"},
            {"id":3,"name":"rakib"},
            {"id":4,"name":"shihab"},
            {"id":6,"name":"rubel"}
         ]
     * 
     * @apiParam no parameter; 
     * 
     * @apiSuccess {object} multiple updated data 
     * 
     * @apiError {array} []
     * @apiError Route Not Found
     */
    .patch(bulkUpdateByIds);


module.exports = bulkUpdate;