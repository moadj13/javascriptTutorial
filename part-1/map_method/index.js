// .map() = accept a callback and appliies that function to each
//          element of an array, then return a new array

//map returns a new array with the results of the function, 

const numbers = [1, 2, 3, 4, 5]

//map return a value, but doesn't modify the original array
function square(element){
    return Math.pow(element, 2)
}
const squares = numbers.map(square)
console.log(squares)
console.log(numbers)



//for each modifies the original array , doesn't return anything
function cube(element, index, array){
    array[index] = Math.pow(element, 3)
}
numbers.forEach(cube)
console.log(numbers)


//example #2

const date = ["2014-4-30", "2014-5-10", "2014-6-20"]

function formatDate(element){
    const parts = element.split("-")  //note "part" is an array
    return `${parts[0]}/${parts[1]}/${parts[2]}`
}
const formattedDate = date.map(formatDate)
console.log(formattedDate)