function myFunction() {
  let element = document.body;
  element.classList.toggle("dark");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
let slideInterval = setInterval(function () {
  plusSlides(1);
}, 6000); // Change image every 6 seconds

// Pause on hover
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

slideshowContainer.addEventListener('mouseleave', () => {
  slideInterval = setInterval(function () {
    plusSlides(1);
  }, 3000);
});

// script.js
let currentIndex = 0;
const allSlides = document.querySelectorAll('.carousel-slide');
const numberOfSlides = allSlides.length;

function displaySlides() {
  allSlides.forEach((slide, index) => {
    slide.style.transform = `translateX(${-currentIndex * 100}%)`;
  });
}

function changeSlides(step) {
  currentIndex = (currentIndex + step + numberOfSlides) % numberOfSlides;
  displaySlides();
}

// Automatic slideshow
let autoSlideInterval = setInterval(function () {
  changeSlides(1);
}, 3000); // Change image every 3 seconds

// Pause on hover
let carouselWrapper = document.querySelector('.carousel-container');
carouselWrapper.addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});

carouselWrapper.addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(function () {
    changeSlides(1);
  }, 3000);
});

// Initial display
displaySlides();


var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark_theme");
  if(document.body.classList.contains("dark_theme")){
    icon.src="/static/sun.png";
  }
  else{
    icon.src="/static/moon.png";

  }
}


$(".toggle").click(function(){
  $(".navcollaps").toggleClass("show");
});

