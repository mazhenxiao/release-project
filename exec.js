const util = require("util");
const setT = util.promisify(setTimeout);
setT(1000,"setT").then(arg=>{
    console.log(arg);      
})
console.log(util)
