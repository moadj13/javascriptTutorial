var index = 0;
function changeColors(){
    var colors = ["red", "yellow", "green", "orange", "blue", "white", "black",
        "purple"]
    document.getElementsByTagName("body")[0].style.background = colors[index++];
     //since it want to know which tag [0] helps to identify which 
     //body we want to select
     if(index > colors.length - 1){
        index = 0;    //if the index exced the length of the array "colors"
        //then it will stack on the color purple . . . so the "index = 0;" help 
        // to reset it back, so that it can change non-stop when clicked
     }
    console.log(index)

}