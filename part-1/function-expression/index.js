//function declaration  = define a reusable block of code
//                        that perform a task

// 1. Callbacks in asynchronous operations
// 2. Higher-order Function
// 3. Closures
// 4. Event Listners



function hello(){
    console.log("hello world")
}

//function expressions = a way to define function as value 
//                       or variable

const HELLO= function(){
    console.log("HELLO WORLD")
}

hello()
HELLO()

//The setTimeout() method calls a function after a number of milliseconds.
// 1 second = 1000 milliseconds. 
setTimeout(hello, 3000)

//in javascript it is possible to pass an entire function ...
//... as an argument or treat it as a value
setTimeout(function(){
    console.log("hello there ...")
}, 3000)

//Example # 2 for function expression
const number = [1, 3, 5, 6, 8, 9]
const square = number.map(function (element){
    return Math.pow(element, 2)
})

console.log(square)