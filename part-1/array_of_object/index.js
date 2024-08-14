const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits[1].name)

fruits.push({name: "pom", color: "red", calories: 40})
console.log(fruits)
//fruits.pop()
//console.log(fruits)
//fruits.splice(1, 2)
//console.log(fruits)

fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color))

//------------------- filter -------------------
const yellowfruits = fruits.filter(fruit => fruit.color == "yellow");

console.log(yellowfruits);

const highCalFruit = fruits.filter(fruit => fruit.calories > 90)
console.log(highCalFruit)

//------------------- reduce -------------------

const maxFuit = fruits.reduce((max, fruit) => max.calories > fruit.calories ? max : fruit)
console.log(maxFuit)
console.log(maxFuit.calories)

const mincalFruit = fruits.reduce((min, fruit) => min.calories < fruit.calories ? min : fruit)
console.log(mincalFruit)
console.log(mincalFruit.calories)