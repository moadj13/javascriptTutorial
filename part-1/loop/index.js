// while loop = reapeat some code While some condition is True

/*

let username = "";

while(username === "" || username === null ){
    username = window.prompt("what is your name");
}

console.log(`your name is ${username}`)


// another variation of while loop 
//do . . . while 
//meaning do the code firs then check the codition at the end

let username1 //while using do...while notice we don't need to set Username1 a Value 

do{
    username1 = window.prompt("what is your name");
}while(username1 === "" || username1 === null)

console.log(`hello ${username1}`);

*/


/*

let loggenIn = false;
let username;
let password;

while(!loggenIn){
    username = window.prompt("enter your username?")
    password = window.prompt("enter your Password?")
    loggenIn = true
}

if(username === "myusername" && password === "mypassword")
{
    console.log("you are logged in")
}
else
{
    console.log("you are not loggen in")
}

*/

//================================================
// for loop = repeat some code a lomited amount of times

for(let i = 0; i < 10; i++)
{
    console.log(i);
}

//skip iteration

for(let i = 1; i < 20; i++){
    if(i == 13){
        continue; //use 'continue' to skip
    }
    else{
        console.log(i)
    }
}

//to break out of iteration
for(let i = 1; i < 20; i++){
    if(i == 13){
        break; //use 'continue' to skip
    }
    else{
        console.log(i)
    }
}