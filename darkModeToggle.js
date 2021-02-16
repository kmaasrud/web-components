if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

function darkModeToggle() {
    var body = document.body;
    var button = document.getElementById("night-mode");
    body.classList.toggle("dark-mode");
    button.classList.toggle("selected");
}
