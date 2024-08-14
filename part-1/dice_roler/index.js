function rollDice(){

    const numofDice =document.getElementById("numofDice").value;
    //.value property retrieves the current value of the selected element
    const diceResult =document.getElementById("diceResult");
    const diceImage =document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(let i = 0; i < numofDice; i++){
        const value = Math.floor(Math.random() * 6) +1;
        values.push(value);
        images.push(`<img src="Images/${value}.png">`);
    }
    diceResult.textContent = `Dice: ${values.join(", ")}`;
    diceImage.innerHTML = images.join('')  
    //innerHTML gets or sets the HTML or XML markup contained within the element.
       
}