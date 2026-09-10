let darkBtn = document.querySelector(".dark");
let lightBtn = document.querySelector(".light");
let heartAbout = document.querySelector(".heart-about");

darkBtn.addEventListener("click", function () {
    heartAbout.classList.remove("light-mode");
});

lightBtn.addEventListener("click", function () {
    heartAbout.classList.add("light-mode");
});