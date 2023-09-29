function review(x) {
    if(x === 0){
        document.querySelectorAll(".review")[0].style.opacity = '100%';
        document.querySelectorAll(".productimg")[0].style.filter = 'brightness(0.3)';
    }
    else if (x === 1){
        document.querySelectorAll(".review")[1].style.opacity = '100%';
        document.querySelectorAll(".productimg")[1].style.filter = 'brightness(0.3)';

    }
    else if (x === 2){
        document.querySelectorAll(".review")[2].style.opacity = '100%';
        document.querySelectorAll(".productimg")[2].style.filter = 'brightness(0.3)';

    }
    else if (x === 3){
        document.querySelectorAll(".review")[3].style.opacity = '100%'; 
        document.querySelectorAll(".productimg")[3].style.filter = 'brightness(0.3)';

    }


}

function unreview(x) {
    if(x === 0){
        document.querySelectorAll(".review")[0].style.opacity = '0%';
        document.querySelectorAll(".productimg")[0].style.filter = 'brightness(1)';
    }
    else if (x === 1){
        document.querySelectorAll(".review")[1].style.opacity = '0%';
        document.querySelectorAll(".productimg")[1].style.filter = 'brightness(1)';

    }
    else if (x === 2){
        document.querySelectorAll(".review")[2].style.opacity = '0%';
        document.querySelectorAll(".productimg")[2].style.filter = 'brightness(1)';

    }
    else if (x === 3){
        document.querySelectorAll(".review")[3].style.opacity = '0%'; 
        document.querySelectorAll(".productimg")[3].style.filter = 'brightness(1)';

    }
}