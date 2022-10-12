/*
================================================================
@{random route} :
get: localhost:5000/api/v1/user/random/
================================================================

@{all user} :
get: localhost:5000/api/v1/user/all;
if get limited data then send parameter Like:
get: localhost:5000/api/v1/user/all/3;
================================================================

@{save user } :
post: localhost:5000/api/v1/user/save/
================================================================

@{Update user by id} :
patch: localhost:5000/api/v1/user/update/6
for update please send body data;
================================================================

@{Update multiple-user by Body array of object} :
patch: localhost:5000/api/v1/user/bulk-update
for update multiple user please send body 
  [
    {"id":2,"name":"nahid","address":"dhaka"},
    {"id":3,"name":"rakib"},
    {"id":4,"name":"shihab"},
    {"id":6,"name":"rubel"}
  ];
================================================================

@{delete a user by id} :
delete: localhost:5000/api/v1/user/delete/3
================================================================


*/