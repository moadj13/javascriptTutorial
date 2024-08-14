// Logical operators = used to manpulate boolean values
//                     True/False

//     AND = &&
//     OR  = ||
//     NOT = !

//Example use case for || or
const temp = -250;

if(temp <= 0 || temp >= 30){
    console.log("The weather is Bad");
}
else{
    console.log("the weather is Good")
}

//Example use case for && and
const temp1 = 25;

if(temp1 > 0 || temp1 <= 30){
    console.log("The weather is Good");
}
else{
    console.log("the weather is Bad")
}

//Example use case for ! not
const isSunny = false;

if(!isSunny){
    console.log("It is Cloudy");
}
else{
    console.log("It is Sunny")
}