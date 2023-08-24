const fs = require("fs");
const path = require("path");

let srcPath = "/Users/interviewbit/Desktop/FullStack Morning/module4/myDirectory/file.md";

let destDirectoryPath = "/Users/interviewbit/Desktop/FullStack Morning/module4/myDirectory2";

let baseNameOfFile = path.basename(srcPath);
console.log(baseNameOfFile);

// let destPath = destDirectoryPath+"/"+baseNameOfFile

let destPath = path.join(destDirectoryPath,baseNameOfFile);
// console.log(destPath);
fs.copyFileSync(srcPath,destPath);

fs.unlinkSync(srcPath);

