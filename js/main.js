document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MENU HAMBÚRGUER
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            // Alterna ícone do menu
            menuToggle.textContent =
                navMenu.classList.contains("active")
                    ? "✕"
                    : "☰";
        });

    }

/* =========================
       ACCORDION FAQ
    ========================= */

    const accordionHeaders =
        document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {

        header.addEventListener("click", function () {

            const content = this.nextElementSibling;

            // Fecha os outros accordions
            document
                .querySelectorAll(".accordion-content")
                .forEach(item => {

                    if (item !== content) {
                        item.style.maxHeight = null;
                    }

                });

            // Alterna abertura
            if (content.style.maxHeight) {

                content.style.maxHeight = null;

            } else {

                content.style.maxHeight =
                    content.scrollHeight + "px";

            }

        });

    });

    /* =========================
       VALIDAÇÃO FORMULÁRIO
    ========================= */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            let isFormValid = true;

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");

            const formSuccess =
                document.getElementById("formSuccess");

    /* =========================
        VALIDAÇÃO NOME
    ========================= */

            if (name.value.trim() === "") {

                document
                    .getElementById("nameError")
                    .style.display = "block";

                isFormValid = false;

            } else {

                document
                    .getElementById("nameError")
                    .style.display = "none";

            }


});