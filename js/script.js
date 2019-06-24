import { link } from "fs";

document.getElementById("toggleMenuButton").addEventListener("click", function () {
    document.getElementById("mainNav").classList.toggle("toggleMenu");
    document.getElementById("mobile-icon").classList.toggle("fa-bars");
    document.getElementById("mobile-icon").classList.toggle("fa-times");
});

document.getElementsByClassName("nav-link").addEventListener("click", function (){
  this.nav-link
});

jQuery(document).ready(function($) {
    function scrollToSection(event) {
      event.preventDefault();
      var $section = $($(this).attr('href')); 
      $('html, body').animate({
        scrollTop: $section.offset().top
      }, 1000);
    }
    $('[data-scroll]').on('click', scrollToSection);
  }(jQuery));