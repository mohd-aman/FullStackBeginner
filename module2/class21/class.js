class Person{
    constructor(name,age){     //constructor method gets invoked as soon as object of class is created.
                            // it will register all properties your class will have
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello from ${this.name}`)
    }
}

//Inheritance -> The process of one class taking properties from other class known as inheritance
class Student extends Person{
    constructor(name,age,batch,score){
        super(name,age); // we are invoking the constructor method of parent
        this.batch = batch;
        this.score = score;
    }
}

class Teacher{
    constructor(name,age,batch,score,classStrength){
        this.name = name;
        this.age = age;
        this.batch = batch;
        this.score = score;
        this.classStrength = classStrength;
    }
    sayHello(){
        console.log(`Hello from ${this.name}`);
    }
}

let student1 = new Student("Sheldon",29,"july batch",100);
student1.sayHello();
console.log(student1);


// let person1 = new Person("Alex","25");
// console.log(person1);
// person1.sayHello();

// let person2 = new Person("Adam","30");
// person2.sayHello();
