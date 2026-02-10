document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'active' quando o elemento entra na tela
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    });

    // Seleciona todos os elementos que devem ser animados
    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));
});