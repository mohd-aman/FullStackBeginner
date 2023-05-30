// let a = 10;
// console.log(a);


function hello(){
    console.log("Hello World");
}

// hello();

let helloVar = function (){
    console.log("Hello Everyone");
}

// helloVar();

let arr = [1,2,3,4];

function fxn(arr){
    arr.push(6);
    return arr;
}

let result = fxn(arr);
console.log(result);
console.log(arr);

function anotherFxn(arr){
    arr.push(7);
    return arr;
}

let anotherResult = anotherFxn(arr);
console.log(anotherResult);
