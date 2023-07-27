let a = [1,2,3,4];

let b = [...a];
b.push(6)

console.log(a);
console.log(b);

let c = b.filter((ele)=>{
    return ele%2 == 0;
})

console.log(c);