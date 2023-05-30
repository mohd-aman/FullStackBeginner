let radiusOfCircles = [1,3,5,6,8,9];

function calculateDiameter(r){
    return 2*r;
}
function calculateCircumference(r){
    return 2*Math.PI*r;
}
function calculateArea(r){
    return Math.PI*r*r;
}

// function calculate(radiusArr,cb){
//     let arr = [];
//     for(let i=0;i<radiusArr.length;i++){
//         let logic = cb(radiusArr[i]);
//         arr.push(logic);
//     }
//     return arr;
// }

// let circumferenceOfCircle = calculate(radiusOfCircles,calculateCircumference);

let circumferenceOfCircle = radiusOfCircles.map(calculateCircumference);
console.log(radiusOfCircles);
console.log(circumferenceOfCircle);


// Question-

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 82;

function convertIntoUSD(amount){
    return amount/inrtToUsd;
}


// let conversionTransaction = transactions.map(convertIntoUSD)

let conversionTransaction = transactions.map(function(amount){
    return amount/inrtToUsd;
})
console.log(conversionTransaction);
