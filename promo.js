/* SCROLL ANIMATION */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".scroll-animate, .promo-card").forEach(el => {
    observer.observe(el);
});

/* HEADER FADE */
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".promo-title").classList.add("show");
});
