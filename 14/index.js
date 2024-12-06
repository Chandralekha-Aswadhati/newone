let button=document.getElementById("countButton")
let counterDisplay=document.getElementById("counter")
let count=0;
button.addEventListener("click",()=>{
    count++;
    counterDisplay.textContent="number of clicks :"+count;
})
