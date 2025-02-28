document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const logo = document.querySelector(".logo img"); // Seleziona l'immagine del logo
    const darkLogo = "logo0wPalette.png"; // Logo per dark mode
    const lightLogo = "logo0bPalette.png"; // Logo per light mode

    // Funzione per cambiare il logo in base alla modalità
    function updateLogo() {
        if (document.body.classList.contains("light-mode")) {
            logo.src = lightLogo; // Cambia al logo chiaro
        } else {
            logo.src = darkLogo; // Cambia al logo scuro
        }
    }

    // Event listener per il pulsante toggle
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        updateLogo();
    });

    // Imposta il logo corretto all'avvio della pagina
    updateLogo();
});
