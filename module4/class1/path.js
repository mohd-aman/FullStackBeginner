const path = require("path");

// "/Users/interviewbit/Desktop/FullStack Morning/module3/spread.js"

console.log(__dirname); // path of current directory

console.log(__filename) // path of current file

let baseName = path.basename("/Users/interviewbit/Desktop/FullStack Morning/module3/spread.js");
console.log(baseName);

let extName = path.extname("/Users/interviewbit/Desktop/FullStack Morning/module3/spread.js");
console.log(extName);