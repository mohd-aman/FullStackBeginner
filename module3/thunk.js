let x = 10;

// Thunk is a function that wraps another function or expression to delay computation
let update = ()=>{
    x = 11;
}

console.log(x);




update();