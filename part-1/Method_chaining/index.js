// Method Chaining = calling one method after another in
//                   one continuous line of coe

let username = window.prompt("enter your name: ?")

//----------NO METHOD CHAINING--------------

username = username.trim();
let letter = username.charAt(0);
letter = letter.toLocaleUpperCase();

let extrachar = username.slice(1);
extrachar = extrachar.toLocaleLowerCase();
username = letter + extrachar;

console.log(username);

//----------METHOD CHAINING--------------

username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);