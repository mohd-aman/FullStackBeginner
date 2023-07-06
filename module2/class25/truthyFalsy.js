let a = 93;
let b = !true;

// falsy values -> 0, "", undefined, null, NaN, false 
// apart from the above falsy values rest is treated as truthy

if(a){
    console.log("a is true");
}else{
    console.log("a is fale");
}

if(b){
    console.log("b is true");
}else{
    console.log("b is false");
}
