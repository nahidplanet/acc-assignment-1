const { users } = require("../../utils/mainData");


// users
module.exports.userDeleteById = (req, res, next) => {
    const { id } = req.params;
    const userId = Number(id);
    if (userId > users.length) {
        res.send(" id not found");
    } else {
        const newUsers = users.filter(x => x.id !== userId);
        res.send(newUsers);
    }

}
