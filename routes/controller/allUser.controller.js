const { users } = require("../../utils/mainData");


module.exports.allUser = (req,res,next)=>{
    res.json(users);
}
module.exports.allUserByLimit = (req,res,next)=>{
    const {id} = req.params;
    const limit = Number(id);

    if (limit > users.length) {
        res.send(" id not found");
    }else{
        const limitedUser = users?.map(x=>x);
        const limitedData = limitedUser.slice(0,limit);
        res.json(limitedData);
    }


}
