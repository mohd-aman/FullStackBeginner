function fxn(){
    let a = 10;
    function gxn(){
        console.log(a);
    }
    return gxn;
}

let innerFxn = fxn();
//after execution of line no 9 we have
// innerFxn = function gxn(){
//     console.log(a);
// }

innerFxn();