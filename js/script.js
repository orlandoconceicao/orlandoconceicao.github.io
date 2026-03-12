window.addEventListener("load", () => {

const bio = document.querySelector("#bio-container");
const about = document.querySelector("#about-container");

setTimeout(() => {
bio.classList.add("show");
}, 200);

setTimeout(() => {
about.classList.add("show");
}, 400);

});

/* animação botão projetos */

const btn = document.querySelector("#btn-projects");

btn.addEventListener("mouseover", () => {
btn.style.transform = "scale(1.05)";
});

btn.addEventListener("mouseout", () => {
btn.style.transform = "scale(1)";
});