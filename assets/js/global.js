"use strict";

/* Global vars */

var touchScreen = false;

/* On DOM load */

document.addEventListener('DOMContentLoaded', () => {
    // Detect mobile
    window.addEventListener('touchstart', function() {
        document.querySelector('body').classList.remove('no-touch');
        window.touchScreen = true;
    });
    
    // Mouse and keyboard
    setEventsGlobal();
    
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
    
    start();
});

/* Responsive */

function responsiveGlobal() {
    if (window.innerWidth < 768) { // Mobile
        document.querySelector('body').classList.add('mobile');
    } else { // DT/Tablet
        document.querySelector('body').classList.remove('mobile');
    }
}

/* Mouse and keyboard events */

function setEventsGlobal() {

}

/* Start */

function start() {

}

/* Global */