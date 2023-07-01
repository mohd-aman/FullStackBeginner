let fs = require("fs");
// console.log(fs);


//Synchronously

console.log("Before");

let file1 = fs.readFileSync("f1.txt");
console.log("Data of file 1 -> " + file1);

let file2 = fs.readFileSync("f2.txt");
console.log("Data of file 2 -> "+file2);

let file3 = fs.readFileSync("f3.txt");
console.log("Data of file 3 -> " + file3);


console.log("After");