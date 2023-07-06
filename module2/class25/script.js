function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink == "coffee"){
            resolve("Order for Coffeee is placed");
        }else{
            reject("Order not Placed");
        }
    })
}

function processDrink(orderStatus){
    return new Promise(function(resolve){
        resolve(`${orderStatus} and served`);
    })
}

function generateBill(ordereProcesseed){
    return new Promise(function(resolve){
        resolve(`${ordereProcesseed} and Bill is 100Rs`);
    })
}

let placeOrderPromise = placeOrder("tea");
// console.log(placeOrderPromise);


placeOrderPromise.then(function(orderStatus){
    // console.log(orderStatus);
    return processDrink(orderStatus);
}).then(function(ordereProcesseed){
    // console.log(ordereProcesseed);
    return generateBill(ordereProcesseed);
}).then(function(bill){
    console.log(bill);
}).catch(function(error){
    console.log(error);
})


// placeOrderPromise.catch(function(error){
//     console.log(error);
// })