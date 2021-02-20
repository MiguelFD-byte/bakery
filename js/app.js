$(document).ready(function(){
   $('.logo').css('opacity','1'); 
   $('.titulo').css('transform','translateX(0)');
   $('.text').css('opacity','1');
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0);
});
