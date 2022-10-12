
const { users } = require("../../utils/mainData");

module.exports.newUserAdd = (req, res, next) => {
    let {id,gender,name,contact,address,photoUrl} = req.body;
    
    // let unicId;
    if (!id || !gender || !name || !contact || !address || !photoUrl) {
        res.send("all field is required")
    }else {

        const newUsers = users;
        const aaa= newUsers.length+1;
        const data =  {id:aaa,gender,name,contact,address,photoUrl};
        users.push(data);
        res.send(users);
    }
   
    
     
}
