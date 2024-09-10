'use strict'

// Toggle bar

document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});

// Testiomonial slides

let slideIndex = 0;

function setupSlides() {slides = document.querySelectorAll('.testimonio');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.testimonio');
    slideIndex += n;
    if(slideIndex >= slides.length) slideIndex = 0;
    if(slideIndex < 0) slideIndex = slides.length = -1;
    setupSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    setupSlides();
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});

// NUmber of items in the cart

document.addEventListener('DOMContentLoaded', function(){
    let cartCount = 0;
    updateCartCount();

    function updateCartCount() {
        document.getElementById('cart-count').innerText = cartCount;
    }

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(){
            cartCount++;
            updateCartCount();
        });
    });
});