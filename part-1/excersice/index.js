//console.log('hello'); 
//console.log('i like pizza!');

//this will display pop-up alert message 
//window.alert('this is an alert');  

//this will add  the text "hello" inside element with id = myh1
//document.getElementById('myh1').textContent = 'hello';

//let age = 5;
//age = age ** 2; //exponent
//age -= 2  //short hand to arthimetic
//age -= 18
//age--;  //decrement by 1
//age++;  //increment by 1
//let extra = age % 2;

//let firstname = "bro"
//let s = null //keyword "null" is for assighning an empty value


//console.log(typeof age);
//console.log('your name is ',firstname)

//document.getElementById('p1').textContent = firstname;
//document.getElementById('p2').textContent = 'my age is ' + age;
//document.getElementById('p3').textContent = extra;
//document.getElementById('p4').textContent = firstname;

/*
    operator 
    1. precedencethesis ()
    2. exponent
    3 .multiplacation & division & modulus
    4  addition & subtaction

*/



//username = window.prompt("what is your name"); //to prompt user and assighn the value to "username"
//console.log(username)


//more profetional way to prompt a user
//let username;

//document.getElementById('mysubmit').onclick = function(){
//    username = document.getElementById('mytext').value;
//    document.getElementById("p4").textContent = 'hello ' + username
//}

//type conversion
//age = window.prompt("what is your age")
//age = Number(age);
//console.log(age+1)

//const pi = 3.14159; //a variable that can't be change

const pi = 3.14159;
let radius;
let circumfrence;

radius = Number(radius);


document.getElementById('submit').onclick = function(){
    radius = document.getElementById('mytext').value;
    radius = Number(radius);
    circumfrence = 2 * pi * radius;
    document.getElementById("p5").textContent = circumfrence + 'cm';
}






