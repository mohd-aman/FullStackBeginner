function multiplyBy(num){
    return function(x){
         return num * x ;
          var num = 2;
     }
} 
var multiplyByTwo = multiplyBy(2);

var res = multiplyByTwo(5);