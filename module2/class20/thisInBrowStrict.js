"use strict"

// console.log(this);  ///window

// function fxn(){
//     console.log(this);       //undefined.
// }

// fxn();

// function fxn(){
//     function gxn(){
//         console.log(this);       // undefined
//     }
//     gxn();      //direct invocation 
// }
// fxn();

let obj = {
    name:"Vinay",
    age:"Don't know",
    sayHello:function(){
        
        function gxn(){
            console.log("value of this inside gxn : ",this);
        }
        console.log("inside sayHello ", this);
        console.log(this.name);
        this.gxn(); // ?
       
    }
}

obj.sayHello();
// let sayHello1 = obj.sayHello;
// sayHello1();
