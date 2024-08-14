// super = keyword is used in classes to call constructor or access
// the properties and methods of a parent(superclass)
// this = this object
// super = the parent

class Animal{
    
    constructor(name, age){
        this.name = name
        this.age = age
    }

    move(speed){
        console.log(`this ${this.name} moves at speed of ${speed} `)
    }
}

class Rabbit extends Animal{
    constructor(name, age, runspeed) {
        super(name, age)
        this.runspeed = runspeed
    }

    run(){
        super.move(this.runspeed)
    }
}

class Fish extends Animal{
    constructor(name, age, swimspeed) {
        super(name, age)
        this.swimspeed = swimspeed
    }
}

class Hawk extends Animal{
    constructor(name, age, flyspeed){
        super(name, age);
        this.flyspeed = flyspeed;
    }
}

const rabbit = new Rabbit("bunny", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("fhawk", 3, 50);

console.log(`the rabbit name is ${rabbit.name} and it is ${rabbit.age} year old and it's speed is ${rabbit.runspeed}/hr`)

rabbit.run() //call method  



                     //NOTE//
//=== differences between constructors, classes, and objects in JavaScript, along with examples: ===

//1. **Constructor**:
//    - A constructor is a **function** that serves as a blueprint for creating objects.
//    - It defines how to **initialize** new instances (objects) of a particular type.
//    - Constructors are used to create **multiple instances** of an object with similar properties and behaviors.
//    - When you create an object using a constructor, you typically use the `new` keyword.
//    - Example of defining a constructor function:
//      ```javascript
//      function Person(name, age) {
//        this.name = name;
//        this.age = age;
//      }
//      const person1 = new Person('Alice', 30);
//      console.log(person1.name); // Outputs: "Alice"
//      ```
// 
// 2. **Class**:
//    - Introduced in ECMAScript 2015 (ES6), classes provide a more **structured and familiar** way to define object blueprints.
//    - A class is essentially a **syntactic sugar** over constructor functions.
//    - It allows you to define **methods**, **properties**, and **inheritance** in a cleaner manner.
//    - Unlike constructors, classes cannot be directly called; they are meant to be instantiated using the `new` keyword.
//    - Example of defining a class:
//      ```javascript
//      class Animal {
//        constructor(name) {
//          this.name = name;
//        }
//        speak() {
//          console.log(`${this.name} makes a sound.`);
//        }
//      }
//      const dog = new Animal('Dog');
//      dog.speak(); // Outputs: "Dog makes a sound."
//      ```
// 
// 3. **Object**:
//    - An object is an **instance** created from a constructor or a class.
//    - Objects represent **real-world entities** and hold data (properties) and behavior (methods).
//    - You can create objects using either constructors or class constructors.
//    - Example of creating an object using a constructor:
//      ```javascript
//      function Car(make, model) {
//        this.make = make;
//        this.model = model;
//      }
//      const myCar = new Car('Toyota', 'Camry');
//      console.log(myCar.make); // Outputs: "Toyota"
//      ```
// 
//    - Example of creating an object using a class:
//      ```javascript
//      class Book {
//        constructor(title, author) {
//          this.title = title;
//          this.author = author;
//        }
//      }
//      const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald');
//      console.log(myBook.title); // Outputs: "The Great Gatsby"
//      ```
// 
// In summary, constructors and classes both serve as blueprints for creating objects, but classes provide a more modern and organized way to define them. Objects, on the other hand, are the actual instances that hold data and behavior based on these blueprints. 🚀
// 
// ==================================================================


// ====the differences between `this` and `super()` in JavaScript: ===
// 
// 1. **`this`**:
//    - The `this` keyword refers to the current instance of an object or the context in which a function is executed.
//    - When used inside a method of an object or a class, `this` points to the instance of that object or class.
//    - It allows you to access properties and methods within the same object or class.
//    - Example using `this`:
//      ```javascript
//      class Person {
//        constructor(name) {
//          this.name = name;
//        }
//        greet() {
//          console.log(`Hello, my name is ${this.name}!`);
//        }
//      }
//      const person = new Person('Alice');
//      person.greet(); // Outputs: "Hello, my name is Alice!"
//      ```
// 
// 2. **`super()`**:
//    - The `super()` function call is used specifically within class constructors (when using inheritance).
//    - It calls the parent class's constructor and initializes the parent's properties.
//    - You must call `super()` before accessing the `this` keyword in the derived class's constructor.
//    - Example using `super()`:
//      ```javascript
//      class Animal {
//        constructor(name) {
//          this.name = name;
//        }
//      }
// 
//      class Dog extends Animal {
//        constructor(name, breed) {
//          super(name); // Calls the parent class's constructor
//          this.breed = breed;
//        }
//        bark() {
//          console.log(`${this.name} (a ${this.breed}) says woof!`);
//        }
//      }
// 
//      const myDog = new Dog('Buddy', 'Golden Retriever');
//      myDog.bark(); // Outputs: "Buddy (a Golden Retriever) says woof!"
//      ```
// 
// In summary:
// - Use `this` to refer to properties and methods within the current instance.
// - Use `super()` to call the parent class's constructor and initialize properties in derived classes.
//======================================================================================================