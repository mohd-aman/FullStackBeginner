// function Car(name,color){
//     this.name = name;
//     this.color = color;   
// }

// Car.prototype.getDetail = function(){
//     console.log(`Name of the car is ${this.name} and of color ${this.color}`);
// }

// let bmwObj = new Car("Bmw","Red");
// console.log(bmwObj);
// bmwObj.getDetail();

// let car2Obj = new Car("Lambo","Black");
// console.log(car2Obj);
// car2Obj.getDetail();

let obj = {
    name:"Siba",
    age:"No idea",
    sayHello:function(batch1,batch2,batch3){
        // console.log(this);
        console.log(`Name is ${this.name} and age is ${this.age}`);
        this.batch = batch1;
        this.batch2 = batch2;
        this.batch3 = batch3
        console.log(this);
    },
}

let obj2 = {
    name:"Aman",
    age:"55",
}

let obj3 ={
    name:"Alex",
    age:25,
}

let batches = ["june batch","july batch","August batch"];

// obj -> sayHello:function(){
//     console.log(this);
//     console.log(`Name is ${this.name} and age is ${this.age}`)
// }

// obj.sayHello("June Batch","July Batch","August Batch");

// obj.sayHello.call(obj2,batches[0],batches[1],batches[2]);

//apply method
// obj.sayHello.apply(obj2,batches);

// obj.sayHello.call(obj3,"August Batch");


//bind method

let sayHelloBoundToObj2 = obj.sayHello.bind(obj2);

sayHelloBoundToObj2("June","July","Aug");
// sayHelloBoundToObj2();
// sayHelloBoundToObj2();
// sayHelloBoundToObj2();
// sayHelloBoundToObj2();


