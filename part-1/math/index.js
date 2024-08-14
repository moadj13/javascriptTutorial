//Math = built in object that provide a 
//       collection of properties  and methods

console.log(Math.PI);
console.log(Math.E);

let x = 3.99;
let y = 2;
let v = 4;
let f = 81;
let w = 10;
let z;

z = Math.round(x);
console.log(z)

z = Math.floor(x);  //round number down
console.log(z)

z = Math.ceil(x);  //round number up
console.log(z)

z = Math.trunc(x);  //eliminate any decimal point
console.log(z)

z = Math.pow(y, v);  //power-of
console.log(z)

z = Math.sqrt(f);  //square root - of
console.log(z)

z = Math.log(w);  //logarithm
console.log(z)

//trignometry
z = Math.cos(45);  //cosin
console.log(z)

z = Math.sin(45);  //sin
console.log(z)

z = Math.tan(45);  //tanjent
console.log(z)
//---------------------------
z = Math.abs(-2.25);  //absolute value
console.log(z)

z = Math.sign(-34);  //sign value of negative number
console.log(z)
z = Math.sign(34);  //sign value of posetive number
console.log(z)
z = Math.sign(0);  //sign value of zero
console.log(z)
//-----------------------------------------
let max = Math.max(3, 6, 23, 12, 5); //to find maximum number
let min = Math.min(3, 6, 23, 12, 5); //to find minimum number

console.log("max is " + max + "," + "min is " + min)
//--------------------------------------------------

let r = Math.random(); //generate random number b/n 0 & 1
console.log(r)

//-------- to output random number b/n 50 and 100 --------- 
let maximum = 100;
let minimum = 50

let randomnum = Math.floor(Math.random() * (maximum - minimum)) + minimum;
console.log(randomnum)
