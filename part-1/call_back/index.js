//call back .....a fuction that is passed as an argument to another 
//               function

//     used to handle asynchronous operations
//     reading file
//     network requests
//     Interacting with database

// "Hey, when your done, call this next"
//A callback function in JavaScript is a function that's called after 
//...the first function has completed its task

//A callback function in JavaScript is a function that's called after the 
//....first function has completed its task

sum(displaypage, 9, 2)

function sum(callback, x, y){
    let result = x + y
    callback(result)

}

function displayconsole(callback, x, y){
    console.log(result)
}

function displaypage(result){
    document.getElementById("myh1").textContent = result
}