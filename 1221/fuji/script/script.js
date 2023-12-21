const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const images = document.querySelectorAll(".slide img");

const slide = document.querySelector(".slide");
slide.insertBefore(images[images.length - 1], images[0]);
images[images.length - 1].style.marginLeft = "-100%";


const leftSlider = function () {
    const slideImages = document.querySelectorAll(".slide img");
    slide.appendChild(slideImages[0]);
    slideImages[1].removeAttribute("style");
}

leftBtn.addEventListener("click", leftSlider);

const rightSlider = function () {
    const slideImages = document.querySelectorAll(".slide img");
    slideImages[1].removeAttribute("style");

    slideImages[0].style.marginLeft = "0";
    slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
}


rightBtn.addEventListener("click", rightSlider);

window.setInterval(leftSlider, 2000);//2000ミリ秒=2秒
