let radiusOfCircles = [1,3,5,6,8,9];

function calculate(radiusArr,cb){
    let arr = [];
    for(let i=0;i<radiusArr.length;i++){
        let logic = cb(radiusArr[i]);
        arr.push(logic);
    }
    return arr;
}

function calculateDiameter(r){
    return 2*r;
}
function calculateCircumference(r){
    return 2*Math.PI*r;
}
function calculateArea(r){
    return Math.PI*r*r;
}

let diameterOfCircles = calculate(radiusOfCircles,
                                calculateDiameter)
console.log(diameterOfCircles);

let circumferenceOfCircle = calculate(radiusOfCircles,
                                calculateCircumference)
console.log(circumferenceOfCircle)

let areaOfCircles = calculate(radiusOfCircles,
                                calculateArea);
console.log(areaOfCircles);