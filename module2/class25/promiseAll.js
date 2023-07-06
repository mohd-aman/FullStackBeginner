let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");

//allPromise will resolve only when all the promise is success
//if any of the one is rejected allPromise will also a failure
let allPromise = Promise.all([f1Promise,f2Promise,f3Promise]);

// allPromise.then(function(arr){
//     // console.log(arr);
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i]+"")
//     }
// })

// allPromise.catch(function(error){
//     console.log(error);
// })

(async function(){
    try{
        let dataArr = await allPromise;
        console.log(dataArr);
    }catch(error){
        console.log(error);
    }
})();