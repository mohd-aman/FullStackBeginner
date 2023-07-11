//write code for printing 1,2,3,4,5 after each second.
//what will be the output of code given 


// function fxn(){
//     for(var i=1;i<6;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }

// fxn();




// function fxn(){
//     for(let i=1;i<6;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }

// fxn();



function fxn(){
    for(var i=1;i<6;i++){

        function gxn(i){
            setTimeout(function(){
                console.log(i);
            },i*1000);
        }
        
        gxn(i);
    }
}

fxn();