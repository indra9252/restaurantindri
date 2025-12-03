document.addEventListener("DOMContentLoaded", () => {

    // Membuat semua card bisa diklik
    document.querySelectorAll(".banner-card.clickable").forEach(card => {
        const target = card.getAttribute("data-link");

        card.addEventListener("click", () => {
            if (target && target !== "#") {
                window.location.href = target;
            }
        });
    });

});

function goPromo() {
    window.location.href = "promo.html";
}