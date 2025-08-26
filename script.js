$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,         // ⏱ Slides change every 3 seconds
    speed: 600,                  // ⏩ Transition takes 0.6 seconds
    arrows: true,
    prevArrow: '<button class="slick-prev">&#8592;</button>',
    nextArrow: '<button class="slick-next">&#8594;</button>',
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });
});

// Duplicate ticker list automatically for seamless loop
document.addEventListener("DOMContentLoaded", () => {
  const tickerTrack = document.querySelector(".ticker-track");
  const tickerList = tickerTrack.querySelector(".ticker-list");

  // Clone and append
  const clone = tickerList.cloneNode(true);
  clone.setAttribute("aria-hidden", "true"); // for accessibility
  tickerTrack.appendChild(clone);
});
