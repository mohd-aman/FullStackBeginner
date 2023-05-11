//in javascript object are like key value pair.

// initialize the empty object 
// let obj = {};

// let person ={
//     name:"Aman",
//     age:45,
//     phone:123456,
//     isMale:true
// }
// console.log(person);

//in dot notation whatever you write after . is treated as string.
// console.log(person.age);

// console.log(person.name);

// let c = "name"
//bracket notation use in qoute if directly writing key else it will be treated as variable
// console.log(person["name"]);

let capAmerica = {
    name:"Steve Rogers",
    age:99999,
    friends:["Bucky","Tony","Natasha","Thor","Bruce"],
    sayHi:function(){
        console.log("Steve says Hi");
    },
    address:{
        country:"USA",
        city:{
            state:"Brooklyn",
            pincode:12345
        }
    },
    isAvenger:false
}

console.log(capAmerica.age);
console.log(capAmerica.friends[0]);
console.log(capAmerica["friends"][0]);

// console.log(capAmerica.address.city.state);
// console.log(capAmerica["address"]["city"]["state"])
// console.log(capAmerica.state); won't work

// update the object 
// console.log(capAmerica);
// capAmerica.isAvenger = true;
// console.log(capAmerica);

// capAmerica.movies = ["First Avenger","Civil War","End Game"]

// console.log(capAmerica);

// console.log(capAmerica.sayHi) won't call the function 

capAmerica.sayHi();

delete capAmerica.age

console.log(capAmerica);