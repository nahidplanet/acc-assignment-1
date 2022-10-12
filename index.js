// import 
const express = require('express');
const cors = require('cors');
const app = express();
const errorHandle = require('./middleware/errorHandle');
const randomRoute = require('./routes/v1/random.route');
const allUsers = require('./routes/v1/allUser.route');
const userSave = require('./routes/v1/userSave.route');
const userUpdate = require('./routes/v1/userUpdate.route');
const userDelete = require('./routes/v1/userDelete.route');
const bulkUpdate = require('./routes/v1/bulkUpdate.route');

// variable 
const PORT = 5000;

// MiddleWare 
app.use(cors());
app.use(express.json());
// database 

// api 
// localhost:5000/api/v1/random/9
// localhost:5000/api/v1/random
app.use("/api/v1/user/random",randomRoute);
app.use("/api/v1/user/all",allUsers);
app.use("/api/v1/user/save",userSave);
app.use("/api/v1/user/update",userUpdate);
app.use("/api/v1/user/bulk-update",bulkUpdate);
app.use("/api/v1/user/delete",userDelete);

// default path 
app.get("/",(req,res)=>{
    res.send("Acc Assignment 1 server running")
});





// application route 
app.all("*",(req,res)=>{
    res.status(404).send("Route Not Found");
})

// express error handler 
app.use(errorHandle);

// server port 
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})


// global external error handler 
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
      process.exit(1);
    });
  });