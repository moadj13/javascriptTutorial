let count = 0;

/*
function changeCount(i){
    if(i == 1){
        count++;
    }
    else if(i == -1){
        count--;
    }
    document.getElementById("count").textContent = count
}
    */

//best way to write the above program is -->

function changeCount(num){ 
    count += num;
    document.getElementById("count").textContent = count;
}

