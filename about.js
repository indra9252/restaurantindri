document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".fade-in");
    setTimeout(() => header.classList.add("show"), 250);
});

function goPromo() {
    window.location.href = "promo.html";
}
