const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider() {
    console.log("display "+ slideIndex);
    console.log(slides.length);
    
    
    if(slides.length>0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide,5000);
    }
}
function showSlide() {
    if(slideIndex>=slides.length){
        slideIndex=0;
    }
    else if(slideIndex<0){
        slideIndex=slides.length-1;
    }
    slides.forEach(slides => {
        slides.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide();
}

function nextSlide() {
    slideIndex++;
    showSlide();
}
