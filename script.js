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

document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector(".gl-gallery-track");
  const items = track.innerHTML;

  // Duplicate content to create infinite scroll
  track.innerHTML += items;
});

document.addEventListener("DOMContentLoaded", () => {
  const videoBox = document.querySelector(".blessing-video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoBox.classList.add("visible");
        } else {
          // remove below line if you only want one-time animation
          videoBox.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 } // trigger when 30% of video is visible
  );

  observer.observe(videoBox);
});

