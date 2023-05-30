let radiusOfCircles = [1,3,5,6,8,9];
//calculate the diameter and circumference for each circle in given array

function calculateDiameterOfCicles(radiusOfCircles){
    let diameterOfCircles = []
    for(let i=0;i<radiusOfCircles.length;i++){
        let diameter = 2*radiusOfCircles[i]
        diameterOfCircles.push(diameter);
    }
    return diameterOfCircles
}

function calculateCircumferenceOfCircles(radiusOfCircles){
    let circumferenceOfCircle = [];
    for(let i=0;i<radiusOfCircles.length;i++){
        let circumference = 2*Math.PI*radiusOfCircles[i];
        circumferenceOfCircle.push(circumference);
    }
    return circumferenceOfCircle
}

function calculateAreaOfCircle(radiusOfCircles){
    let areaOfCircles =[];
    for(let i=0;i<radiusOfCircles.length;i++){
        let area = Math.PI*radiusOfCircles[i]*radiusOfCircles[i];
        areaOfCircles.push(area);
    }
    return areaOfCircles;
}

let diameterOfCircles = calculateDiameterOfCicles(radiusOfCircles);
console.log(radiusOfCircles)
console.log(diameterOfCircles);

let circumferenceOfCircle = calculateCircumferenceOfCircles(radiusOfCircles);
console.log("--------------------------------")
console.log(radiusOfCircles);
console.log(circumferenceOfCircle)

console.log("--------------------------------")
let areaOfCircles = calculateAreaOfCircle(radiusOfCircles);
console.log(radiusOfCircles);
console.log(areaOfCircles);