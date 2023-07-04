let fs = require("fs");

//will be reading parallely but printing in a sequence

let f1Promise = fs.promises.readFile("f1.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");


f1Promise.then(function(data){
    console.log(data+"");
    return f2Promise;
}).then(function(data){
    console.log(data+"");
    return f3Promise;
}).then(function(data){
    console.log(data+"")
})
