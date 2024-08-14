// getter = special method that makes a property readable  
// we use 'get' keyword
// setter = special method that makes a property writeable
// we use 'set' keyword
// validate and modify a value when reading/writting a property

class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height
    }

    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth  
//You’ve used an underscore (_width) to indicate that _width is a private property.
//Although JavaScript doesn’t have true private properties, this convention signals 
//to other developers that _width should not be accessed directly.
        }
        else{
            console.log("error! width must be a positive number")
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight
        }
        else{
            console.log("error! height must be a positive number")
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`
    }

    get height(){
        return `${this._height.toFixed(1)}cm`
    }

    //we can even create properties that doesn't exist in the constructor
    get area(){
        return `${(this._height * this._width).toFixed(1)}cm^2`
    }
}



const rectangle = new Rectangle(2, -5);

rectangle.height = 5;

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area) //we can access'area' as if it is property with a getter

// =========== example # 2 ===========

class person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newfisrtname){
        if(typeof newfisrtname === "string" && newfisrtname.length > 0){
            this._firstname = newfisrtname;
        }
        else{
            console.log("error! firstname must be a non empty string");
        }
    }

    set lastname(newlastname){
        if(typeof newlastname === "string" && newlastname.length > 0){
            this._lastname = newlastname;
        }
        else{
            console.log("error! lastname must be a non empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.log(`Error! Age must be positive number`)
        }
    }

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    get age(){
        return this._age;
    }

    get fullname(){
        return this._firstname + " "+ this._lastname
    }
    
}

const person1 = new person("moa", "ofgaa", 4)
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.fullname);