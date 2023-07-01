// function fxn(){
//     let d = 50;
//     console.log(d);
// }

// fxn();

// let a = 10;
// console.log(a);

// let b = 20;
// console.log(b);

// setTimeout(function(){
//     console.log("Hello 1st")
// },2000)


// function fxn(cb){       // higher order function
//     console.log("I am fxn");
//     cb();   // callback
// }

// function gxn(){         //callback
//     console.log("I am gxn");
// }

// fxn(gxn);


// console.log("1");

//setTimeout does not gurantee of execution of function after exactly delay it can
// take more time depending on if call stack is empty

setTimeout(function cb1(){
    console.log("3")
},3000);

for(let i=0;i<1000000;i++){
    console.log(i);
}

setTimeout(function cb2(){
    console.log("2");
},0)

// console.log("4");
