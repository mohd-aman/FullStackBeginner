// function sum(a,b,c){
//     return a+b+c;
// }

// let res = sum(5,6,9);
// console.log(res);

function outerFxn(a){
    function innerFxn(b){
        function innerMostFxn(c){
            return a+b+c;
        }
        return innerMostFxn;
    }
    return innerFxn;
}

// let innerFxn = outerFxn(5);
// let innerMostFxn = innerFxn(6);
// let res = innerMostFxn(9);
// console.log(res);

// let res = outerFxn(5)(6)(9);
// console.log(res);

// Question 1

// Multiply(2)(3)(3) => 18 , make use of function currying


// let finalAns = Multiply(2)(3)(3);
// console.log(finalAns);


// Question 2 - >

// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2


// Question - 3

// Infinite currying

// write an add function which can add values like this

// add(2)(3)(4)(5)......()


// add(2)(3)(); -> 5
// add(5)(2)(3)() -> 10
// add(5)(5)(5)(5)(5)() -> 25

function add(a){
    return function(b){
        if(b){
            return add(a+b);
        }else{
            return a;
        }
    }
}

let ans = add(2)(3)(6)();
console.log(ans);

//Partial currying or Partial application

function sum(a){
    return function(b,c){
        return a+b+c;
    }
}


let sumWithTen = sum(10);
let sumWithTwo = sum(2);

let res = sumWithTen(5,5);
console.log(res);

let res2 = sumWithTwo(5,5);
console.log(res2);

console.log(sum(10)(5,5));