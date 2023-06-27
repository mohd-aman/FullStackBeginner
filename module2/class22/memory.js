//primitive
// let a = 10;
// let b = 20;
// b = a;
// b = 30;
// console.log(a);   // 10 
// console.log(b);  // 30


//reference
// let obj1 = {
//     name:"Alex"
// }

// let obj3 = {
//     name:"karan"
// }

// let obj2 = obj1;

// obj2.name = "Adam"

// obj2 = obj3

// obj3.name = "Hales"

// console.log(obj1);  //Adam
// console.log(obj2);  //Hales  
// console.log(obj3);  //Hales



//shalow vs deep

//shallow copy
// let obj1 = {
//     name:"Mrunal",
//     batch:"June Batch",
//     address:{
//         city:"New York",
//         pincode:12434
//     }
// }

// // let obj2 = Object.assign({},obj1);  //shallow copy
// let obj2 = {...obj1}        //shallow copy

// obj2.name = "Hales";

// obj2.address.city = "LA";

// console.log(obj1);
// console.log(obj2);


//Deep copy

// let obj1 = {
//     name:"Adam",
//     batch:"June Batch",
//     address:{
//         city:"New York",
//         pincode:12434
//     }
// }

// let stringObj1 = JSON.stringify(obj1);
// let obj2 = JSON.parse(stringObj1);
//  let obj2 = JSON.parse(JSON.stringify(obj1)) // or in one line

// obj2.name = "Hales";

// obj2.address.city = "LA";

// console.log(obj1);
// console.log(obj2);





//Questions for practice

let obj = {
    name:"Adam",
    friends:["Alex","Tim","Carl"],
    address:{
        city:"Delhi",
        pincode:234540,
        bornPlace:{
            village:"No idea",
            pincode:353530
        }
    }
}

let obj5 = obj;

let obj7 = {...obj};

let obj8 = JSON.parse(JSON.stringify(obj));

obj8.friends = ["No one"]
obj8.address.bornPlace.village = "don't know"

obj7.address.city = "LA"
obj7.name = "Alex"

obj5.name = "Hales";
obj5.address.city = "New York"

console.log(obj);
console.log(obj5)
console.log(obj7)
console.log(obj8);