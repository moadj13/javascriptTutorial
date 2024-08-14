//desctructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// ======EXAMPLE 1=========
// SWAP THE VALUE OF TWO VARAIBLE

let a = 1;
let b = 2;

[a, b] = [b, a]

console.log(a); // log 2 
console.log(b); // log 1

// ======EXAMPLE 2=========
// SWAP 2 ELEMENT IN AN ARRAY

 const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// ======EXAMPLE 3=========
// ASSIGN ARRAY ELEMENT TO VARIABLE

const color = ["red", "green", "blue", "black", "white"];

const [firstcolor, secondcolor, thirdcolor, ...extracolors] = color //"...extracolors" is a rest parametere
// allows a function to accept an indefinite number of arguments as an array
console.log(firstcolor)
console.log(secondcolor)
console.log(thirdcolor)
console.log(extracolors)      //logs "['black', 'white']"
console.log(...extracolors)  //logs "black white"

// ======EXAMPLE 4=========
//  EXTRACT VALUES FROM OBJECT

const person1 = {
    firstname: "spongebob",
    lastname: "squarepant",
    age: 30,
    job: "frycock",
}

const person2 = {
    firstname: "patrick",
    lastname: "star",
    age: 34,
}

const {firstname, lastname, age, job="unemployed"} = person2 //'job="unemployed"' means if "job" is null assign "unemployed" as default value
console.log(firstname)
console.log(lastname)
console.log(age)
console.log(job)

// ======EXAMPLE 5=========
//  DESTRUCTURING IN FUNCTION PARAMETER

function displayPerson({firstname, lastname, age, job= "unemployed"}){
    console.log(`Name: ${firstname} ${lastname}`)
    console.log(`Age ${age}`)
    console.log(`Job: ${job}`)
}

const person3 = {
    firstname: "bob",
    lastname: "marly",
    age: 44,
    job: "musician",
}

const person4 = {
    firstname: "patrick",
    lastname: "star",
    age: 34,
}


displayPerson(person3)



