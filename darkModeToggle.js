function darkModeToggle() {
    var body = document.body;
    var button = document.getElementById("night-mode");
    body.classList.toggle("dark-mode");
    button.classList.toggle("selected");
}