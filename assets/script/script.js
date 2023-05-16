// Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
});

// Navbar Scroll
window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    var jumbotron = document.querySelector(".jumbotron");
    var jumbotronHeight = jumbotron.offsetHeight;
    var scrollPosition = window.pageYOffset;

    if (scrollPosition > jumbotronHeight) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

// Slider Text
if (document.getElementsByClassName(".second-title")) {
  let slides = [
    "<h1 class='second-title'>Front-end Developer</h1>",
    "<h1 class='second-title'>Network Enginner</h1>",
  ];

  let i = 0;

  const slider = () => {
    document.getElementById("slider--text").innerHTML = slides[i];
    document.getElementById("slider--text").classList.add("fade-in");

    i < slides.length - 1 ? i++ : (i = 0);
  };

  slider();
  setInterval(slider, 4000); // ganti slide setiap 4 detik
}

// SlideShow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    setTimeout(showSlides, 4000); // ganti slide setiap 4 detik
}
