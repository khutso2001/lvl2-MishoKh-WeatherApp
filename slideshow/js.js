let slides = document.getElementsByClassName("mySlides");
let kn = document.getElementsByClassName("kn");

let index = 1;
showSlides(index);

function nextslide(n) {
  showSlides(index += n);
}

function this_slide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  
  if (n > slides.length) {index = 1}    
  if (n < 1) {index = slides.length}
  for ( let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (let i = 0; i < kn.length; i++) {
      kn[i].className = kn[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  kn[index-1].className += " active";
}

