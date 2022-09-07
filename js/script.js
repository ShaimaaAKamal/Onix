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



  let videos=document.getElementsByClassName('video');
  let videoToggles=document.getElementsByClassName('videoToggle');
  let videoFrames=document.getElementsByClassName('videoFrame');
  for(let i=0 ;i<videos.length;i++){
    videos[i].addEventListener("click",(e)=>{
      for(let j=0 ; j< videoToggles.length ; j++){
        if(j==i){
          videoToggles[i].children[0].classList.remove('d-none');
          videoToggles[i].children[1].classList.add('d-none'); 
          videoFrames[i].classList.remove('d-none');
        }
        else{
          videoToggles[j].children[0].classList.add('d-none');
          videoToggles[j].children[1].classList.remove('d-none');
          videoFrames[j].classList.add('d-none');

        }
      }})
  }


  let Navachors=document.getElementsByClassName('nav-link');
  for(let i=0 ; i < Navachors.length ; i++){
    Navachors[i].addEventListener('click',(e)=>{
      for(let j=0 ; j <Navachors.length ; j++){
        if(j == i)
        Navachors[i].classList.add('active');
        else
        Navachors[j].classList.remove('active');
      }
    

    })
  }