// console.log(this);    // {} empty object


// function fxn(){
//     console.log(this);  // global objecct
// }

// fxn();

// function fxn(){
//     function gxn(){
//         console.log(this);    // global object
//     }
//     gxn();
// }

// fxn();

// let obj = {
//     name:"Siba",
//     age:"No idea",
//     sayHello:function(){
//         console.log(this);
//     }
// }

// obj.sayHello();         /// object itself {name:Siba,age:"No idea", sayHello:function}

// let sayHello1 = obj.sayHello;

// //this is same as line number 29 
// // let sayHello1 = function(){
// //     console.log(this);
// // }

// sayHello1();    /// global object


let anotherObject = {
    name:"Vivek",
    age:"Don't know",
    sayHello:function(){
        console.log("value of this inside sayHello: ", this);
        function gxn(){
            console.log("value of this inside gxn: ", this);
        }
        gxn();
    }
}

anotherObject.sayHello();