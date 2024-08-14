//  inheritance = allows a new class to inherite proprties and 
//  methods from an existing class (parent -> chiled)
//  helps with code reusability

class animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class rabbit extends animal{
    name = "Rabbit";
    ran(){
        console.log(`This ${this.name} can run`) //child classes can have their own methods
    }
}
class Fish extends animal{
    name = "Fish";
}

const rabbit1 = new rabbit
rabbit1.eat()
rabbit1.ran()

const Fish1 = new Fish

Fish1.alive = false;
console.log(Fish1.alive)


console.log(rabbit1.alive)