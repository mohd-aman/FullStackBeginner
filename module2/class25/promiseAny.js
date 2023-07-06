let fs = require("fs");

let f1Promise = fs.promises.readFile("f.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");

let anyPromise = Promise.any([f1Promise,f2Promise,f3Promise]);

// will get whoever is resolved first out of given promises.
anyPromise.then(function(data){
    console.log(data+"")
})


//will go inside catch when all the promises gets rejected.
anyPromise.catch(function(error){
    console.log(error);
})