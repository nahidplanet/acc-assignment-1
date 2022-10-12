const { users } = require("../../utils/mainData");

module.exports.userUpdateByBody = (req, res, next) => {

    const { userId } = req.params;
    const { id, gender, name, contact, address, photoUrl } = req.body;
    console.log(req.body);
    console.log(name);
    if (Number(userId) > users.length ) {
        res.send(" id not found");
    } 
    if (!req.body == "") {
        res.send("set a object please ")
    } else {
        let updateData = users.find(x => x.id == userId);
        
        console.log(updateData);
        updateData.gender = gender ? gender : updateData.gender;
        updateData.name = name ? name : updateData.name;
        updateData.contact = contact ? contact : updateData.contact;
        updateData.address = address ? address : updateData.address;
        updateData.photoUrl = photoUrl ? photoUrl : updateData.photoUrl;

        res.send(updateData);
    }

}