// testimonial.js

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");
  if (!slider) return;  // Exit if slider is not on page

  const slides = slider.querySelectorAll(".testimonial");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const dotsContainer = slider.querySelector(".dots");

  if (!slides.length) return; // No testimonials, nothing to do

  // Build the navigation dots dynamically
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll("span");

  let currentIndex = 0;
  let autoplayTimer;
  const AUTOPLAY_INTERVAL = 5000; // Slide every 5 seconds

  function setActiveSlide(index) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    setActiveSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setActiveSlide(prevIndex);
  }

  function goToSlide(index) {
    if (index === currentIndex) return;
    setActiveSlide(index);
    resetAutoplay();
  }

  function startAutoplay() {
    stopAutoplay(); // Ensure no existing timer is running
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Event listeners for arrows
  if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); resetAutoplay(); });

  // Pause autoplay on hover, resume on leave
  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  // Initialize slider: set initial active slide and begin autoplay
  slides.forEach((slide, idx) => {
    if (idx === 0) slide.classList.add("active");
    else slide.classList.remove("active");
  });
  startAutoplay();
});
