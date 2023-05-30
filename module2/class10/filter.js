let arr = [1,2,4,57,8,9,345,12,79,987];

//expected output  [2,4,8,12];

// function even(arr){
//     let filteredArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2 == 0){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr
// }

// let filteredArr = even(arr);
// console.log(filteredArr);

// function even(arr,cb){
//     let filteredArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(cb(arr[i])){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr
// }

// function checkEven(ele){
//     return ele%2 == 0;
// }

// let filteredArr = arr.filter(checkEven)


let filteredArr = arr.filter(function(ele){
    return ele%2 == 0;
})

console.log(filteredArr);

// question take out the positive transactions only
// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
