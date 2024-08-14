// Array = variable like structure that can hold more than one value

let fruits = ["apple", "orange", "banana"];

/*

fruits[2] = "pinaple"
fruits.push("coconat"); //push() is used to add a new element
//                        at the end of the index by appending new index 
fruits.pop(); //remove the last element
fruits.unshift("coconut") //add element to the begning
fruits.shift(); //remove an element at the begning

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

*/

let numOfFruits = fruits.length
console.log(numOfFruits)
console.log(fruits.indexOf("banana")) //tell us the index of a given element
console.log(fruits.indexOf("pinapple")) //return -1 if the element is not found

//to display all element in the array "fruits"
for(let i = 0; i <= numOfFruits-1; i++)
{
    console.log(fruits[i])
}

//enhanced form of for loop -for the above code
for(let fruit of fruits) //shortcut to display element in an array
{
    console.log(fruit)
}

//to sort
fruits.sort()
console.log(fruits)

//to reverse sort
fruits.sort().reverse()
console.log(fruits)



