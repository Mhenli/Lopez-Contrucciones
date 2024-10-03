// scripts.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
});

// scripts.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 2500);

document.querySelectorAll('.img-servicios').forEach(carousel => {
    let images = carousel.querySelectorAll('img');
    let indicators = carousel.querySelectorAll('.indicators span');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
            indicators[i].classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    carousel.querySelector('.prev').addEventListener('click', () => {
        let newIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(newIndex);
    });

    carousel.querySelector('.next').addEventListener('click', () => {
        let newIndex = (currentIndex + 1) % images.length;
        showImage(newIndex);
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => showImage(i));
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
});

window.addEventListener('DOMContentLoaded', () =>
{
    const headerTitle = document.querySelector('.hero-text');
    headerTitle.classList.add('visible');
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.nosotros-grid, .servicios-grid, .contacto-grid, .slide-in, .parrafo-nosotros, .parrafo-contacto, .container-flex');
    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerPoint) {
        section.classList.add('visible');
    } else {
        section.classList.remove('visible');
    }
    })
})
