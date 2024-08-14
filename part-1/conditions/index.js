//IF STATEMENTS

/*
let age = 13;

if(age >= 18){
    console.log("you are old enough to enter the site");   
}
else{
    console.log("you are not old enough to enter the site");  
}
*/

let isStudent ;
let check;

check = window.prompt("are you a stuent(yes/no)")
if(check == "yes"){
    isStudent = true
    console.log("youre a student")
}
else if(check == "no"){
    isStudent = false
    console.log("you are not a student")
}
else{
    console.log("incorrect answer")
}


/*
if(isStudent){
    console.log("you are a student")
}
else{
    console.log("youre not a student")
}
*/