console.clear();

const _ = require("lodash");
let str = "12\n\r3456789123456789123456789";

const c = str.split(/\n\r/);
// const c = _.chunk(str, 6);

console.log(c, str);
