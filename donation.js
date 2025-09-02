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
