// let bmwCar = {
//     name:"Bmw",
//     color:"Red",
//     topSpeed:"300km/h"
// }

// let ferrariCar = {
//     name:"Ferrari",
//     color:"Black",
//     topSpeed:"280km/h"
// }

// let lamboCar = {
//     name:"Lambo",
//     color:"Blue",
//     topSpeed:"250km/h"
// }

//constructor fxn.
function Car(name_of_car,color_of_car,top_speed_of_car){
    console.log(this)               // a new empty obj is created and this -> {}
    this.name = name_of_car;                         //{name:"bmw"}
    this.color = color_of_car;                    //{name:"bmw",color:"black"}
    this.top_speed_of_car = top_speed_of_car       //{name:"bmw",color:"black",top_speed_of_car:"300km/h"}
    //by default returns the newly created object (this) -> {name:"bmw",color:"black",top_speed_of_car:"300km/h"}
}


let obj1 = new Car("Bmw","black","300km/h")
console.log(obj1)

let obj2 = new Car("ferrari","red","280km/h");
console.log(obj2);

let obj3 = new Car("Lambo","blue","250km/h")
console.log(obj3)