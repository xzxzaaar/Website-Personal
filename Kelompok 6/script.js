var themeButton = document.getElementById('themeButton');
var body = document.body;

themeButton.addEventListener('click', function () {
    body.classList.toggle('dark');
});
