"use strict";

/* Global vars */

var touchScreen = false;
var rotateTimer;
var resizeTimerGlobal;

/* On DOM load */

document.addEventListener('DOMContentLoaded', () => {
    // Detect mobile
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Android/i)) {
        window.touchScreen = true;
    }
    
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
    
    // Orientation change
    window.addEventListener('orientationchange', () => {
        clearTimeout(window.rotateTimer);
        window.rotateTimer = setTimeout(() => {
            location.reload(); // Refresh page
        }, 250);
    });
    
    // Start app
    setTimeout(() => {
        start();
    }, 500); // Short delay
});

/* Responsive */

function responsiveGlobal() {
    if (window.innerWidth < 768) { // Mobile

    } else { // DT

    }
    
    // On resize finish
    clearTimeout(window.resizeTimerGlobal);
    window.resizeTimerGlobal = setTimeout(() => {

    }, 250);
}

/* Mouse and keyboard events */

function setEventsGlobal() {

}

/* Start */

function start() {

}

/* Global */