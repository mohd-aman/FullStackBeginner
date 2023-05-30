// function firstName(){
//     console.log("Vivek")
// }

function lastName(){
    console.log("Dogra");
}

// firstName();
// lastName();


// function firstName(fxn){
//     console.log("Vivek");
//     fxn();
// }

// firstName(lastName);

function hof(cb){
    console.log("I am a higher order function as i am accepting a function as a argument");
    cb();
}

function cb(){
    console.log("I am a callback as i am being passed as an argument to another function");
}

hof(cb);

// hof(cb());