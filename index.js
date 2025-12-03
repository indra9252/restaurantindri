function goPromo() {
    window.location.href = "promo.html";
}

/* SCROLL ANIMATION */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        }
    });
}, { threshold: 0.25 });

document.querySelectorAll(".scroll-animate").forEach(el => {
    observer.observe(el);
});

/* HEADER LOAD */
window.addEventListener("DOMContentLoaded", () => {
    const headerContent = document.querySelector(".fade-header");

    setTimeout(() => {
        headerContent.classList.add("show");
    }, 250);
});
