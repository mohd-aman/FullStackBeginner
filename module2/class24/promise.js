let myPromise = new Promise(function(resolve,reject){
    let a = 5;
    let b = 5;
    if(a == b){
        resolve("Success !!! Promise has been kept");
    }else{
        reject("OOPs Error Encountered");
    }
})


myPromise.then(function(abc){
    console.log(abc);
})

myPromise.catch(function(error){
    console.log(error);
})

myPromise.finally(function(){
    console.log("This is inside finally");
})