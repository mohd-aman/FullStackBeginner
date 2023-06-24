// let obj = {name:"Alex",age:"29"}


// console.log(obj);

// let flag = obj.hasOwnProperty("name");
// console.log(flag);

// let arr = [1,2,3,4,5]
// arr.push(6);
// console.log(arr);

function Car(name,color){
    this.name = name;
    this.color = color;

    // this.sayHello = function(){
    //     console.log(`Hello from ${this.name}`)
    // }

}

Car.prototype.sayHello = function(){
    console.log(`Hello from ${this.name}`)
}

Car.prototype.brake = function(){
    console.log(`Brakes has been applied to ${this.name}`)
}

let car1 = new Car("Bmw","red");
console.log(car1);
car1.sayHello();
car1.brake();

let car2 = new Car("Ferrari","Black");
console.log(car2)
car2.sayHello();
car2.brake();
// let flag = car2.hasOwnProperty("name");
// console.log(flag);

let car3 = new Car("Lambo","Blue");
console.log(car3)

car3.sayHello();