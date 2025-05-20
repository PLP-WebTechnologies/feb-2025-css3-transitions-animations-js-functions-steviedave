function applyTheme(theme) {
  const body = document.body;
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(theme + "-theme");

  const button = document.getElementById("toggle-btn");
  button.textContent = theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme";
}

// Apply saved theme on load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
});

// Toggle theme and animate
document.getElementById("toggle-btn").addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);

  // Animate the button
  const button = document.getElementById("toggle-btn");
  button.classList.add("animate");

  setTimeout(() => {
    button.classList.remove("animate");
  }, 500);
});
