// script.js - YoakinTech Solutions 🚀

// PART 1: Event Handling
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").textContent =
    "Hello from YoakinTech! 🚀 Thanks for clicking 🎉";
});

// PART 2: Interactive Elements
// Dark/Light Mode Toggle
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  document.getElementById("counter").textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  document.getElementById("counter").textContent = counter;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// PART 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from refreshing

  let valid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email Validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password Validation (min length 6)
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // If form is valid
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "✅ Signup successful! Welcome to YoakinTech 🚀";
    // Clear form
    document.getElementById("signupForm").reset();
  }
});
