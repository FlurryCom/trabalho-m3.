function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    // Verifica se o elemento está visível na viewport considerando o scroll
    var isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    // Verifica se o elemento está parcialmente visível (para casos com overflow)
    var isPartiallyVisible = (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );

    return (isVisible || isPartiallyVisible);
}

function animateOnScroll() {
    var images = document.querySelectorAll('.animate-on-scroll');

    images.forEach(function(image) {
        if (isElementInViewport(image)) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

// Adicionar um listener para scroll que chama a função de animação
window.addEventListener('scroll', animateOnScroll);

// Chama a função ao carregar a página para verificar elementos visíveis
window.addEventListener('load', animateOnScroll);