// constructor = special method for defining the properties and
// methods of object

function car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`you drive the ${this.model}`)}
}

const car1 = new car("ford", "mustang", 2024, "red")
const car2 = new car("chevrolet", "camero", 2019, "blue")

console.log(car1.make)
console.log(car1.model)
console.log(car1.color)
car1.drive();

console.log(car2.make)
console.log(car2.model)
console.log(car2.year)