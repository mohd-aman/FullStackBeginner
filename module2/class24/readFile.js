let fs = require("fs");

// console.log("Before");

// fs.readFile("f1.txt",function(error,data){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(""+data);
//     }
// })

// console.log("After");

let f1Promise = fs.promises.readFile("f1.txt");

console.log(f1Promise);

function cb(data){
    console.log(""+data);
}

f1Promise.then(cb)

f1Promise.catch(function(error){
    console.log(error);
})