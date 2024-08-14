// = assignment operator
// == comparison operator (compare if the values are equal)
// === strict equality operator (compare if values & data-type are equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

if(PI == "3.14"){
    console.log("That is PI")
}
else{
    console.log("That is not PI")
}

// === strict equality operator (compare if values & data-type are equal)
if(PI === "3.14"){
    console.log("That is PI")
}
else{
    console.log("That is not PI")   //OUTPUT is "That is not PI" b/c the "3.14" is read as string b/c of the quatation marks
}

//for example is we don't enclose 3.14 inside quatation  
if(PI === 3.14){
    console.log("That is PI") //this will be displayed 
}
else{
    console.log("That is not PI")  
 }


 // !== strict inequality operator 
if(PI !== 3.14){
    console.log("That is not PI")
}
else{
    console.log("That is PI")    //this will be displayed 
 }