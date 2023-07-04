console.log("Before");

setTimeout(function(){
    console.log("timeout");
},0)

Promise.resolve().then(function(){
    console.log("inside promise");
})

Promise.resolve().then(function cbp2(){
    console.log("another promise resolved");
})

console.log("After");