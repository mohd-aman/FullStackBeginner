"use strict"

// console.log(this);    //empty object {}

// function fxn(){
//     console.log(this);       //undefined
// }

// fxn();


// function fxn(){
//     function gxn(){
//         console.log(this);
//     }
//     gxn();
// }

// fxn();

let obj = {
    name:"Mrunal",
    age:"No idea",
    sayHello:function(){
        // console.log(this);
        // function gxn(){
        //     console.log(this);
        // }
        console.log(this.age);      //this = obj and this.age or obj.age same thing right? if sayHello is called like obj.sayHello();
        // gxn();
    }
}

obj.sayHello();

// let sayHello1 = obj.sayHello;
// sayHello1();
