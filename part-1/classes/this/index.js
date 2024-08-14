// this = refence to the object where THIS is used 
// (the object depends on the imidiate context)
// person.name = this.name

const person1 = {
    name: "spongeboob",
    favFood: "hambergure",
    sayHello1: function(){console.log(`HI I AM ${name}`)},
    sayHello: function(){console.log(`HI I AM ${this.name}`)}

}


person1.sayHello1() //doesn't display {name} 
person1.sayHello()  // display as inteded b/c 'this' is used, to say this is
// to reference an object with in