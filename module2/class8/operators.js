// +,-,/,*, =, ===

// let num1 = 1;
// let num2 = 2;
// console.log(num1+num2);

//Type coersion

let num1 = 1;
let num2 = "2";
let num = num1+num2
console.log(num);
console.log(typeof(num));

console.log(35+" i am a string ")

console.log(2*" string ");
console.log(typeof(2*"string"));

// console.log(true+2); 1+2 = 3

// console.log(true+" string ");

console.log(3 - "2");
console.log(3 - "string");

if(3 == "3"){   // just checks the value
    console.log("Equal");
}else{
    console.log("Not Equal")
}

if(3 === "3"){   // checks the value and data type also. 
    console.log("Equal");
}else{
    console.log("Not Equal")
}

console.log(false == "");

let c = 30;

let stringC = String(c);

console.log(typeof(stringC));

let cNumber = Number(stringC);
console.log(typeof(cNumber));
