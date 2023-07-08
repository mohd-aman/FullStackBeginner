


function fxn(){
    let a = 10;
    function gxn(){
        function gxn2(){
            console.log(a);
        }
        gxn2();
    }
    gxn();
}

fxn();

