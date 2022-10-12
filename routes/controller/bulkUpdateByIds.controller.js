const { users } = require("../../utils/mainData");

module.exports.bulkUpdateByIds = (req, res, next) => {
    const ids = req.body;

    let finalData = [];
    let allIds = []
    let abc = [];

    try {

        for (const item of ids) {
            allIds.push(item);
        }
        for (const id of allIds) {
            let MassingData = users.find(user => user.id == id.id);
            abc.push(MassingData);
        }
        for (let i = 0; i < abc.length; i++) {
            const singleUser = abc[i];

            let updateData = users.find(x => x.id == singleUser.id);
            const { gender, name, contact, address, photoUrl } = updateData;

            updateData.gender = allIds[i].gender ? allIds[i].gender : gender;

            updateData.name = allIds[i].name ? allIds[i].name : name;
            updateData.contact = allIds[i].contact ? allIds[i].contact : contact;
            updateData.address = allIds[i].address ? allIds[i].address : address;
            updateData.photoUrl = allIds[i].photoUrl ? allIds[i].photoUrl : photoUrl;
            finalData.push(updateData);
        }
    } catch (error) {
        // let myError = error.message;
    }
    if (finalData == "") {
        res.send("set a multiple object in an array [{},{},{}]");
    } else {

        res.send(finalData);
    }
}