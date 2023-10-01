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

var number1 = "";
var number2 = "";
var isNumber1IsReady = false;

function formNum(n){
    if (!isNumber1IsReady){
        number1 += n;
        document.getElementById("displayNum").textContent = number1;
    }
}