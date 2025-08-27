// Highlight selected amount
const donateButtons = document.querySelectorAll(".donate-amount");
const customInput = document.querySelector(".custom-donation input");

donateButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    donateButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    customInput.value = ""; // clear custom if preset selected
  });
});

// Clear preset if custom amount entered
customInput.addEventListener("input", () => {
  donateButtons.forEach(b => b.classList.remove("active"));
});

// Donate button action
document.querySelector(".donate-btn").addEventListener("click", () => {
  let amount = document.querySelector(".donate-amount.active")?.innerText || customInput.value;
  if (!amount || amount <= 0) {
    alert("Please select or enter a valid amount.");
  } else {
    alert("Thank you for your generous donation of " + amount + "!");
  }
});
