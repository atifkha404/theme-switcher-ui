const toggle = document.getElementById("theme-toggle");
const body = document.body;

const THEME_KEY = "theme";

const savedTheme = localStorage.getItem(THEME_KEY);

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark");
    localStorage.setItem(THEME_KEY, "dark");
  } else {
    body.classList.remove("dark");
    localStorage.setItem(THEME_KEY, "light");
  }
});
