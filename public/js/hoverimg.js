const slider = document.querySelector(".slider");
const images = document.querySelector(".images");
const lens = document.querySelector(".lens");
const result = document.querySelector(".result");

const sliderRect= slider.getBoundingClientRect();
const imagesRect= images.getBoundingClientRect();
const lensRect= lens.getBoundingClientRect();
const resultRect= result.getBoundingClientRect();

slider.addEventListener('mousemove',zoomImage);

function zoomImage(i){
    console.log("zoom image", i.clientX, i.clientY);

    let x = i.clientX;
    let y = i.clientY;

    lens.style.left = x + "px"
    lens.style.top = y + "px"
}



























