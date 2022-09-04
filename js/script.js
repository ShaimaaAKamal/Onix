let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots=document.getElementsByClassName('dot');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("dot-active")

  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.add("dot-active")
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


function currentSlide(n) {
    showSpecificSlides(slideIndex = n);
  }

  
  function showSpecificSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot-active";
  }