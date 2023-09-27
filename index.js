function review() {
    document.querySelector(".review").style.opacity = '100%';
    document.querySelector("#productimg").style.filter = "brightness(0.4)"
}

function unreview() {
    document.querySelector(".review").style.opacity = '0%';
    document.querySelector("#productimg").style.brightness = '100%';
}