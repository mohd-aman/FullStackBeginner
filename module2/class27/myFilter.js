
let firstArr = [1,2,3,4,5,6];
let filteredArr = firstArr.filter(function(ele){
    return ele%2 == 0;
})

console.log(filteredArr)


Array.prototype.myFilter = function(cb){
    // console.log("hello i'm myFilter")
    console.log(this);
    let newArr = [];
    for(let i=0;i<this.length;i++){
        let ele = this[i];
        if(cb(ele)){
            newArr.push(ele);
        }
    }
    return newArr;
}


let arr = [];
let brr = [5,3,6]
 arr.myFilter();

let crr = firstArr.myFilter(function(ele){
     return ele%2 == 0;
 });

 console.log(crr);

