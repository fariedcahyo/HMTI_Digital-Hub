/* ==============================
   MOBILE MENU
================================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

}


/* ==============================
   DATA KEGIATAN
================================= */

const activities = [
    {
        name: "Seminar Teknologi",
        date: "20 September 2026",
        location: "Universitas Dian Nuswantoro",
        description:
            "Kegiatan yang membahas perkembangan teknologi dan penerapannya dalam dunia Informatika."
    },

    {
        name: "Workshop Programming",
        date: "25 September 2026",
        location: "Universitas Dian Nuswantoro",
        description:
            "Workshop untuk meningkatkan kemampuan pemrograman dan problem solving mahasiswa."
    },

    {
        name: "Makrab HMTI",
        date: "30 September 2026",
        location: "Semarang",
        description:
            "Kegiatan untuk mempererat hubungan dan membangun kebersamaan antar mahasiswa Informatika."
    }
];


/* ==============================
   TAMPILKAN KEGIATAN
================================= */

const activitiesContainer =
    document.getElementById("activities-container");

const activitiesPageContainer =
    document.getElementById("activities-page-container");


const container =
    activitiesContainer || activitiesPageContainer;


if (container) {

    activities.forEach(function (activity) {

        const card = document.createElement("article");

        card.classList.add("activity-card");

        card.innerHTML = `
            <div class="activity-image">
                <span>HMTI</span>
            </div>

            <div class="activity-content">

                <p class="activity-date">
                    ${activity.date}
                </p>

                <h3>
                    ${activity.name}
                </h3>

                <p class="activity-location">
                    📍 ${activity.location}
                </p>

                <p class="activity-description">
                    ${activity.description}
                </p>

            </div>
        `;

        container.appendChild(card);

    });

}
/* ==============================
   CONTACT FORM
================================= */

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        if (nama === "") {
            formMessage.textContent = "Nama wajib diisi.";
            formMessage.style.color = "#dc2626";
            return;
        }

        if (email === "") {
            formMessage.textContent = "Email wajib diisi.";
            formMessage.style.color = "#dc2626";
            return;
        }

        if (pesan === "") {
            formMessage.textContent = "Pesan wajib diisi.";
            formMessage.style.color = "#dc2626";
            return;
        }

        formMessage.textContent =
            "Pesan berhasil dikirim. Terima kasih, " + nama + "!";

        formMessage.style.color = "#16a34a";

        contactForm.reset();
    });
}