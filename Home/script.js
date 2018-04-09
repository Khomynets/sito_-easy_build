var slideIndex = 0;
showSlides();

function showSlides() {
  var i = 0;
    var slides = document.getElementsByClassName("img_box");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    
    slides[slideIndex-1].style.display = "block";

    if(slideIndex >= slides.length){
      i = 0;
      slideIndex = 0;
    }  

    setTimeout(showSlides, 2000);
}