let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");

function cb(data){
    console.log(data+"")
}

function errorCb(error){
    console.log(error);
}

f1Promise.then(cb)

f2Promise.then(cb)

f3Promise.then(cb)

f1Promise.catch(errorCb);

f2Promise.catch(errorCb);

f3Promise.catch(errorCb);