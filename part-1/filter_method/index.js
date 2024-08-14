// .filter() = creating a new array by filterning out element
//             out elemnts


let number = [1, 2, 3, 4, 5, 6, 7];

function isEven(element){
    return element % 2 == 0;
}

let evenNums = number.filter(isEven)
console.log(evenNums)

//Example #2
const ages = [16, 17, 18, 18 , 19, 20, 45];

function isunderage(element){
    return element <=18 ? true : false 
}

function isadult(element){
    return element > 18
}

const udner_age = ages.filter(isunderage)
console.log(udner_age)

const adult = ages.filter(isadult)
console.log(adult)

//Example #3
const words = ["apple", "banana", "orange", "kiwi", "pomegranate", 
                "coconut", "pome", "pineapple"]

function isShortWord(element){
    return element.length <= 6
} 

const shortword = words.filter(isShortWord)
console.log(shortword)

function isLongWord(element){
    return element.length > 6
} 

const longword = words.filter(isLongWord)
console.log(longword)
