// console.log(this);  // window
 
// function fxn(){ 
//     console.log(this);      //window
// }

// fxn();

// function fxn(){
//     function gxn(){
//         console.log(this);       //window
//     }
//     gxn();
// }

// fxn();

let obj = {
    name:"Siba",
    age:"No idea",
    sayHello:function(){
        // console.log(this);
        function gxn(){
            console.log(this);
        }
        gxn();
    }
}

obj.sayHello();     // obj

// let sayHello1 = obj.sayHello;
// sayHello1();