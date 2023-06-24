let arr = [1,2,3,4,5];
console.log(arr);
function square(ele){
    return ele*ele;
}

function cube(ele){
    return ele*ele*ele;
}

function myMap(arr,cb){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        newArr.push(cb(arr[i]));
    }
    return newArr
}

Array.prototype.myMap = function(cb){
    let newArr = [];
    // console.log("Value of this keyword",this); // this will point to arr which is calling it
    for(let i=0;i<this.length;i++){
        newArr.push(cb(this[i]));
    }
    return newArr
}

let squareArrByOurMap = arr.myMap(square);
console.log(squareArrByOurMap)

let cubeByOurMap = arr.myMap(cube);
console.log(cubeByOurMap)


// let squareArr = arr.map(square)


// let cubeArr = myMap(arr,cube);
// let squareArrByOurMap = myMap(arr,square);

// console.log(squareArr);
// console.log(cubeArr)





