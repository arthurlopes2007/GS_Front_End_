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

    

});