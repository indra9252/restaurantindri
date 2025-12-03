document.addEventListener("DOMContentLoaded", () => {

    const title = document.querySelector(".contact-title");
    const subtitle = document.querySelector(".contact-subtitle");
    const cards = document.querySelectorAll(".contact-card");

    /* ANIMASI TULISAN */
    setTimeout(() => title.classList.add("show-text"), 150);
    setTimeout(() => subtitle.classList.add("show-text"), 450);

    /* ANIMASI CARD */
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 650 + index * 180);
    });

    /* KLIK CARD */
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const link = card.getAttribute("data-link");
            if (link) window.open(link, "_blank");
        });
    });

});

/* FORM GIMMICK SAJA */
document.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih! Kritik & saran kamu sudah kami terima ❤️");
});

function goPromo() {
    window.location.href = "promo.html";
}
