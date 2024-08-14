// function is reusable code

//example

function happyBirthday(){
    console.log(`happy birthday`)
}
 
happyBirthday(); //call function

//pass argument
function happyBirthdayto(username, age){
    console.log(`happy birthday ${username} you are ${age}`)
}

happyBirthdayto("moa", 27)

function add(x, y){
    let result = x + y;
    return result
}

let answer = add(2, 4);  //store the return value in "answer"
console.log(answer) 

console.log(add(6, 8)); //if we don't care about storing the result