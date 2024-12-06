/*const form =document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    /*alert("Form Submitted!");//
    const Username = document.querySelector("#Username");
    if(!Username.value.length>20 || Username.value.length<8){
        alert("username length should be atleast 8 and not more than 20");
        e.preventDefault();
    }
    else
    {alert("Form Submitted")}
});*/


//to set exactly 8chars//
const form =document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
    const Username = document.querySelector("#Username");
    if(Username.value.length<8){
        alert("username length should be not be less than 8");
        e.preventDefault();
    }
    else if(Username.value.length>8){
        alert("username length should not be greater than 8");
        e.preventDefault();
    }
    else
    {alert("Form Submitted")}
});

