
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
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

    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea[name='message']");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    // Very basic email format check
    if (!email.value.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Message sent! (This is a demo)");
    form.reset();
  });
}

// ---------------------------
// OPTIONAL: Mobile Menu Toggle
// (Add a hamburger button to HTML if needed)
// ---------------------------
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

/* Close menu when a link is clicked */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

/* Close menu when a link is clicked */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
}