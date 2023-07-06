let fs = require("fs");

async function readFileSerially(){
   let f1Data = await fs.promises.readFile("f1.txt");
//    console.log(f1Data+"");
   let f2Data = await fs.promises.readFile("f2.txt");
//    console.log(f2Data+"")
   let f3Data = await fs.promises.readFile("f3.txt");
//    console.log(f3Data+"");
    return f1Data;
}

let res = readFileSerially();

console.log(res)

res.then(function(f1Data){
    console.log(f1Data+"");
})
