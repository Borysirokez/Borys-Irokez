const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Zamknij menu" : "Otwórz menu");
  menuButton.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Otwórz menu");
    menuButton.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Wstaw własny link zaproszenia do Discorda w index.html,
// zastępując https://discord.com/ adresem zaproszenia do serwera.
