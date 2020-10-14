'use strict';

/* Global vars */

window.touchScreen = false;

/* On DOM load */

document.addEventListener('DOMContentLoaded', () => {
    // Detect mobile
    window.addEventListener('touchstart', () => {
        document.querySelector('body').classList.remove('no-touch');
        window.touchScreen = ! window.touchScreen; // Toggle
    });

    setEventsGlobal(); // Mouse and keyboard

    // Scroll
    window.addEventListener('scroll', () => {
        //window.pageYOffset;
    });

    // Resize
    window.addEventListener('resize', () => {
        if (! window.touchScreen) {
            responsiveGlobal();
        }
    });

    responsiveGlobal();

    setTimeout(() => {
        start();
    }, 100); // Short pause to make sure DOM ready
});

/* Responsive */

function responsiveGlobal() {
    if (window.innerWidth < 768) {
        // Mobile
        document.querySelector('body').classList.add('mobile');
    } else {
        // DT/Tablet
        document.querySelector('body').classList.remove('mobile');
    }
}

/* Mouse and keyboard events */

function setEventsGlobal() {}

/* Start */

function start() {}

/* Global */