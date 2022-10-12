// const { users } = require("../utils/mainData");

// module.exports.limitedData = function(req,res,next) {
    
//     const {id} = req.params;
//     const lengthId = Number(id);
//     let limitId = [];
//     let finalData = []
//     setTimeout(() => {
//         for (let i = 0; i < lengthId; i++) {
//             const A = Math.floor(Math.random() * 10) + 1;
//             limitId.push(A);
//         }
        
//     }, 15);
//     req.decode = limitId;
//     next();
// }