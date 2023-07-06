let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt");
let f2Promise = fs.promises.readFile("f.txt");
let f3Promise = fs.promises.readFile("ab.txt");

let promiseRace = Promise.race([f1Promise,f2Promise,f3Promise]);

//it will give you the output of promise which is first one to no longer in pending state
// either it is rejected or resolved.

promiseRace.then(function(res){
    console.log(res+"");
})