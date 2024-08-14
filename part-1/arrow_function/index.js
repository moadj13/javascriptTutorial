//arrow function = a consice way to write fuction experessions
//                 good for simple functions that you use only once
//                (paramerters) => some code

const hello = () => console.log("hello world")
hello()

const HELLO = (name) => console.log(`Hello ${name}`)
HELLO("mulle")

setTimeout(() => console.log("hi there"), 3000)

const num = [1, 3, 4, 5, 6]

const numbers = num.map((num) => Math.pow(num, 3))  // The .map() method is applied to each element in the num array.
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.
console.log(numbers)

const evenNum = num.filter((element) => element % 2 == 0);
// filter() method creates a new array filled with elements that
// pass a test provided by a function.
console.log(evenNum)

