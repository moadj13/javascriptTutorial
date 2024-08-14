var index = 0;

//even if the user has not click any button we still want image_1 to showup on dispaly
//. . . hence the below code
showImage(index) 

function showImage(i){
    index += i;

    var images = document.getElementsByClassName("image")
    var dots = document.getElementsByClassName("dot")


    //every time the user clicks on the right/left button the images will reapper
    //. . . so to block this , we use the blew for loop
    for(i = 0;i < images.length; i++)
        images[i].style.display = "none"

    for(i = 0;i < dots.length; i++)
        dots[i].className = dots[i].className.replace("active", "");

    //if the user is on the last image we send them back to the first image
    //with the below if-code
    if(index > images.length - 1){
        index = 0;
    }

    //if the user is on the fist image and click on previous button send'em to the last image
    if(index < 0){
        index = images.length-1;
    }

    images[index].style.display = "block";
    dots[index].className += " active";
}
