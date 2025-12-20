// ---------------------------
// Navigation Active Link
// ---------------------------
const navLinks = document.querySelectorAll("nav a");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Active link highlight
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Close mobile menu when link is clicked
    nav.classList.remove("open");
  });
});

// ---------------------------
// Smooth Scrolling
// ---------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ---------------------------
// Contact Form Validation
// ---------------------------
const form = document.querySelector(".contact form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input");
    const email = form.querySelector("input[type='email']");
    const message = form.querySelector("textarea");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    if (!email.value.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Message sent! (This is a demo)");
    form.reset();
  });
}

// ---------------------------
// Mobile Menu Toggle
// ---------------------------
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}