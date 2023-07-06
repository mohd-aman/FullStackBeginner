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


async function serveOrder(){
    try{
        let orderStatus = await placeOrder("coffee");
        let ordereProcesseed = await processDrink(orderStatus);
        let bill = await generateBill(ordereProcesseed);
        return bill;
    }catch(error){
        console.log(error);
    }
}


(async function(){
    let bill = await serveOrder();
    console.log(bill);
})();


// let billPromise = serveOrder();
// billPromise.then(function(bill){
//     console.log(bill);
// })
// console.log(bill);