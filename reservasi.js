// ======================================
// TIME SLOT SELECTION
// ======================================
const buttons = document.querySelectorAll('.timeslot');
const selectTime = document.getElementById('timeSelect');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        selectTime.value = btn.innerText.trim();
    });
});


// ======================================
// DATE SELECT
// ======================================
const yearSelect = document.getElementById("yearSelect");
const monthSelect = document.getElementById("monthSelect");
const daySelect = document.getElementById("daySelect");

function loadYears() {
    for (let y = 1945; y <= 2026; y++) {
        const opt = document.createElement("option");
        opt.value = y;
        opt.textContent = y;
        yearSelect.appendChild(opt);
    }
}
function loadMonths() {
    ["01","02","03","04","05","06","07","08","09","10","11","12"].forEach(m => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        monthSelect.appendChild(opt);
    });
}
function loadDays() {
    const total = new Date(yearSelect.value, monthSelect.value, 0).getDate();
    daySelect.innerHTML = "";
    for (let d = 1; d <= total; d++) {
        const opt = document.createElement("option");
        opt.value = d;
        opt.textContent = d;
        daySelect.appendChild(opt);
    }
}

loadYears();
loadMonths();
loadDays();
yearSelect.addEventListener("change", loadDays);
monthSelect.addEventListener("change", loadDays);


// ======================================
// POPUP NOTIFIKASI
// ======================================
const sendBtn = document.getElementById("sendBtn");
const notif = document.getElementById("notif");

sendBtn.addEventListener("click", () => {
    notif.classList.add("show");

    setTimeout(() => {
        notif.classList.remove("show");
    }, 3000);
});

function goPromo() {
    window.location.href = "promo.html";
}
