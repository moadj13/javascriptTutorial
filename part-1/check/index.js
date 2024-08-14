//.checked = property that determines the checked state of an element of an 
//           HTML checkbox  or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult =document.getElementById("subResult");
const paymentResult =document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = 'You are Subscribed';
    }
    else{
        subResult.textContent = "You are not Subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = 'You are now paying with visa';
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = 'You are now paying with mastercard';
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = 'You are now paying with paypal';

    }
    else{
        paymentResult.textContent = ' please select payment method';  
    }
 } 
