function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();


    var isVisible = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );


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

    images.forEach(function (image) {
        if (isElementInViewport(image)) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}


window.addEventListener('scroll', animateOnScroll);


window.addEventListener('load', animateOnScroll);