// forEach() = method used to iterate over the elements of an array
//  and apply a specified function (callback) to each element

//forEach() modifies the original array

// array.forEach(callback)
// element, index and array are provided by forEach()

let numbers = [1, 2, 3, 4, 5,6];

numbers.forEach(double)
numbers.forEach(display);  //pass a call back (display)



function double(element, index, array){
    array[index] = element * 2;
}

function display(element){
    console.log(element);
}

//example #2
let fruit = ["banana", "apple", "orange", "mango"]

function displayf(element){
    console.log(element)
}

function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}
fruit.forEach(uppercase)
fruit.forEach(displayf)


function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
}

fruit.forEach(capitalize)
fruit.forEach(displayf)