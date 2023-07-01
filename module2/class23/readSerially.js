let fs = require("fs");

//Asynchronous
console.log("Before");


//callback hell
fs.readFile("f1.txt",function cb1(error,data){
    if(error){
        console.log(error);
    }else{
        console.log("Data of file 1 -> "+ data);
        fs.readFile("f2.txt",function cb2(error,data){
            if(error){
                console.log(error);
            }else{
                console.log("Data for file 2 -> "+data)
                fs.readFile("f3.txt",function cb3(error,data){
                    if(error){
                        console.log(error);
                    }else{
                        console.log("Data of file 3 -> "+data)
                    }
                })
            }
        })
    }
})

console.log("After");