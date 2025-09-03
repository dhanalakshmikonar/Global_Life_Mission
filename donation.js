// Highlight selected amount button
const amountButtons = document.querySelectorAll(".donation-amount");
const customInput = document.querySelector(".donation-input");

amountButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    amountButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    customInput.value = ""; // clear custom amount
  });
});

customInput.addEventListener("input", () => {
  amountButtons.forEach((b) => b.classList.remove("active"));
});

document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".zoom-in-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          // remove this if you only want one-time animation
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  zoomElements.forEach((el) => observer.observe(el));
});
