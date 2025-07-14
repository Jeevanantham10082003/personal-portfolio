const roles = ["Web Developer", "Software Developer", "Web Designer", "YouTuber", "Content Writer"];
let index = 0;
let charIndex = 0;
const typingSpan = document.querySelector(".typing-text span");

function type() {
  if (charIndex < roles[index].length) {
    typingSpan.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingSpan.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (roles.length) type();
});

const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});
