// const a = [1,3,4,5];
// a.push(7);
// console.log(a);

// pass by value -> no change in original one a new copy will be created 
function fxn(num,obj){
    obj.city ="Delhi"; // change will persist in the original c object as both are refrencingt to the same address.
    console.log(obj);
    // console.log("Inside fxn -> ", num);
    num = 20;
    obj = {    // new assignmnet will point to different address in heap and change won't persist in the original object. 
        name:"Mrunal"
    }
    // console.log("Inside fxn-> ",num)
    console.log(obj);
}

let b = 10;
let c = {
    name:"Aman"
}

// console.log("Outside fxn ->",b);
console.log(c);
fxn(b,c); // reference type call by sharing.
console.log(c);
// console.log("Outside fxn ->",b);
