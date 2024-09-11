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

// Initialize animations AOT

document.addEventListener('DOMContentLoaded', function(){
    AOS.init();
});

// Functions for any carousel

function setupSlides(selector, displayIndex) {
    let slides = document.querySelectorAll(selector);
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[displayIndex].style.display = 'block';
}

function moveSlide(selector, increment) {
    let slides = document.querySelectorAll(selector);
    let slideIndex = parseInt(document.querySelector(selector).getAttribute('data-slide-index')) || 0;
    slideIndex += increment;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    document.querySelector(selector).setAttribute('data-slide-index', slideIndex.toString());
    setupSlides(selector, slideIndex);
}

// Testimonial slides 


document.addEventListener('DOMContentLoaded', () => {
    setupSlides('.testimonio', 0);
    document.querySelector('.prev').addEventListener('click', () => moveSlide('.testimonio', -1));
    document.querySelector('.next').addEventListener('click', () => moveSlide('.testimonio', 1));

});

// Number of items in the cart

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