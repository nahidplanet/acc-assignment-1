const users = require("../../utils/mainData");

module.exports.randomUser = (req, res,) => {
    const idNum = Math.floor(Math.random() * 10) + 1;
    const randomUser = users?.users?.find(x => x.id === Number(idNum));
    res.status(200).send(randomUser)
};



