//-------------------------- Review hover on product ----------------------------
//-------------------------------------------------------------------------------

function review(x) {
    if(x === 0){
        document.querySelectorAll(".review")[0].classList.toggle("hover-review-js");
        document.querySelectorAll(".productimg")[0].classList.toggle("hover-img-js");
    }
    else if (x === 1){
        document.querySelectorAll(".review")[1].classList.toggle("hover-review-js");
        document.querySelectorAll(".productimg")[1].classList.toggle("hover-img-js");

    }
    else if (x === 2){
        document.querySelectorAll(".review")[2].classList.toggle("hover-review-js");
        document.querySelectorAll(".productimg")[2].classList.toggle("hover-img-js");

    }
    else if (x === 3){
        document.querySelectorAll(".review")[3].classList.toggle("hover-review-js");
        document.querySelectorAll(".productimg")[3].classList.toggle("hover-img-js");

    }
}

function unreview(x) {
    if(x === 0){
        document.querySelectorAll(".review")[0].classList.toggle("hover-review-js");
        document.querySelectorAll(".productimg")[0].classList.toggle("hover-img-js");
    }
    else if (x === 1){
        document.querySelectorAll(".review")[1].classList.toggle("hover-review-js");
        document.querySelectorAll(".productimg")[1].classList.toggle("hover-img-js");

    }
    else if (x === 2){
        document.querySelectorAll(".review")[2].classList.toggle("hover-review-js");
        document.querySelectorAll(".productimg")[2].classList.toggle("hover-img-js");

    }
    else if (x === 3){
        document.querySelectorAll(".review")[3].classList.toggle("hover-review-js");
        document.querySelectorAll(".productimg")[3].classList.toggle("hover-img-js");

    }
}

document.getElementsByClassName("Pro_Style")[0].addEventListener("mouseover",function(){review(0)})
document.getElementsByClassName("Pro_Style")[0].addEventListener("mouseout",function(){unreview(0)})
document.getElementsByClassName("Pro_Style")[1].addEventListener("mouseover",function(){review(1)})
document.getElementsByClassName("Pro_Style")[1].addEventListener("mouseout",function(){unreview(1)})
document.getElementsByClassName("Pro_Style")[2].addEventListener("mouseover",function(){review(2)})
document.getElementsByClassName("Pro_Style")[2].addEventListener("mouseout",function(){unreview(2)})
document.getElementsByClassName("Pro_Style")[3].addEventListener("mouseover",function(){review(3)})
document.getElementsByClassName("Pro_Style")[3].addEventListener("mouseout",function(){unreview(3)})


//-------------------------------- dark Mode ------------------------------------
//-------------------------------------------------------------------------------

sun = document.getElementById("sun")
moon = document.getElementById("moon")
body = document.getElementsByTagName("body")[0]
nav = document.getElementsByTagName("header")[0]
product = document.querySelector(".Pro_Style")

function darkMode()
{
    sun.style.display=("block");
    moon.style.display=("none");
    body.classList.toggle("darkMode-body")
    nav.classList.toggle("darkMode-nav")
    document.querySelector("h1")[0].classList.toggle("darkMode-title")
    body.querySelector("p")[0].classList.toggle("darkMode-content")
    product.classList.toggle("darkMode-product")
}
function lightMode()
{
    sun.style.display=("none");
    moon.style.display=("block");
    body.classList.toggle("darkMode-body")
    nav.classList.toggle("darkMode-nav")
    document.querySelector("h1")[0].classList.toggle("darkMode-title")
    body.querySelector("p")[0].classList.toggle("darkMode-content")
    product.classList.toggle("darkMode-product")
}


//-------------------------------- contact us -----------------------------------
//-------------------------------------------------------------------------------

let contactUs = document.querySelector(".contact-btn");

function newFeedback(name,lastName){
    this.name = name;
    this.lastName = lastName;
}
function userFeedback(){
    userName = document.querySelector("#name").value;
    userLastName = document.querySelector("#lastName").value;
    var feedback = new userFeedback() {
        userName,
        userLastName
    }
    document.getElementById("h1").textContent = userLastName;
}