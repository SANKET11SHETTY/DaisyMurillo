// Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 25,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// Mobile Menu
$(document).ready(function () {
  $("#menuBtn").click(() => {
    $("#mobileMenu").slideToggle(300).toggleClass("show");
    $("#menuBtn i").toggleClass("fa-bars fa-xmark");
  });
  $("#mobileMenu a").click(() => {
    $("#mobileMenu").slideUp(300).removeClass("show");
    $("#menuBtn i").removeClass("fa-xmark").addClass("fa-bars");
  });
});
// Preloader
function preLoad(){
  var loader = document.getElementById("pre-loader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });
};
// preLoad()
setTimeout(function(){
  $('#pre-loader').fadeOut();
  $('#pre-loader').delay(150).fadeOut('slow');
}, 3000);
// AOS
  AOS.init({
    duration: 1000,
    easing: 'linear', 
    once: true,
    disable: "mobile",
  });
  // Scroll To Top Button
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#675ffa ${scrollValue}%, #D7D7D7A8 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;


