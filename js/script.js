"use script";

$(document).ready(function () {
  $(".venobox").venobox({
    spinner: "cube-grid",
    infinigall: true,
    numeratio: true,
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});

let typed = new Typed(".element", {
  strings: ["Developer", "Designer", "Photographer", "Freelancer"],
  typeSpeed: 50,
  loop: true,
  backDelay: 1500,
});
