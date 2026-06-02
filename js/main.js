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

    /* =========================
        VALIDAÇÃO E-MAIL
    ========================= */

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email.value.trim())) {

                document
                    .getElementById("emailError")
                    .style.display = "block";

                isFormValid = false;

            } else {

                document
                    .getElementById("emailError")
                    .style.display = "none";

            }

    /* =========================
        VALIDAÇÃO MENSAGEM
    ========================= */

            if (message.value.trim() === "") {

                document
                    .getElementById("messageError")
                    .style.display = "block";

                isFormValid = false;

            } else {

                document
                    .getElementById("messageError")
                    .style.display = "none";

            }


    /* =========================
        FORMULÁRIO VÁLIDO
    ========================= */

            if (isFormValid) {

                formSuccess.style.display = "block";

                // Limpa os campos
                contactForm.reset();

                // Remove mensagem após 4 segundos
                setTimeout(() => {

                    formSuccess.style.display = "none";

                }, 4000);

            }

        });

    }


    /* =========================
        MODAL CAMPANHAS SUSTENTÁVEIS
    ========================= */

    const botoesParticipar = document.querySelectorAll(".btn-submit");
    const botaoFechar = document.querySelector(".close-modal");
    const modal = document.querySelector(".modal");

    // Verifica se os elementos do modal existem na página atual antes de rodar
    if (modal && botaoFechar && botoesParticipar.length > 0) {

        // Função para abrir o modal mudando o display via JavaScript
        const abrirModal = () => {
            modal.style.display = "flex";
        };

        // Função para fechar o modal voltando ao display original (escondido)
        const fecharModal = () => {
            modal.style.display = "none";
        };

        // Adiciona o evento de clique em todos os botões "Participar" da página
        botoesParticipar.forEach(botao => {
            botao.addEventListener("click", abrirModal);
        });

        // Adiciona o evento de clique no botão "Fechar" de dentro do modal
        botaoFechar.addEventListener("click", fecharModal);

        // Fecha o modal caso o usuário clique na parte escura (fora do card do modal)
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                fecharModal();
            }
        });

    }

});

/* =========================
    Script de simulação de submissão
    ========================= */
     document.getElementById('form-registro-acao')
            .addEventListener('submit', function (e) {

                e.preventDefault();

                const desc =
                    document.getElementById('desc-acao')
                        .value
                        .trim();

                const msg =
                    document.getElementById('msg-dashboard');

                if (!desc) {

                    msg.style.color = "red";

                    return;
                }

                msg.textContent =
                    "Sucesso! Sua mensagem foi enviada, logo menos entraremos em contato com você!!!";

                msg.style.color = "green";

                this.reset();

            });
