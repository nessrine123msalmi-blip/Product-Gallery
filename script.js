
/* 1. SELECT HTML ELEMENTS */

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");


/* 2. APPLY THE SELECTED THEME */

function applyTheme(theme) {

    const isDark = theme === "dark";

    document.body.classList.toggle("dark", isDark);

    themeIcon.textContent = isDark ? "☀️" : "🌙";

    themeText.textContent = isDark ? "Light Mode" : "Dark Mode";

    themeToggle.setAttribute(
        "aria-pressed",
        String(isDark)
    );

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Activer le mode clair" : "Activer le mode sombre"
    );
}


/* 3. LOAD SAVED THEME */

let savedTheme = "light";

try {
    savedTheme = localStorage.getItem("theme") || "light";
} catch (error) {
    console.warn("Local storage is unavailable.");
}

applyTheme(savedTheme);


/* 4. TOGGLE BETWEEN THEMES */

themeToggle.addEventListener("click", function () {

    const isDark = document.body.classList.contains("dark");

    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);

    try {
        localStorage.setItem("theme", newTheme);
    } catch (error) {
        console.warn("Unable to save the selected theme.");
    }

});
