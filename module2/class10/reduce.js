let arr = [1,2,3,4,5];

function sumOfArray(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

// let sum = sumOfArray(arr);
// console.log(sum);

let sum = arr.reduce(function(accumulator,ele){
    accumulator = accumulator+ele;
    return accumulator;
})

console.log(sum);