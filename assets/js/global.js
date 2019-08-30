"use strict";

/* Global vars */

var touchScreen = false;
var rotateTimer;
var resizeTimerGlobal;

/* On DOM load */

document.addEventListener('DOMContentLoaded', function() {
    // Detect mobile
    if ((navigator.userAgent.match(/iPhone|iPad|iPod/i)) || (navigator.userAgent.match(/Android/i))) {
        touchScreen = true;
    }
    // Mouse and keyboard events

    // Set-up
    window.addEventListener('scroll', function() {
        let i = window.pageYOffset;
    });
    window.addEventListener('resize', function() {
        if (! window.touchScreen) {
            responsiveGlobal();
        }
    });
    responsiveGlobal();
    window.addEventListener('orientationchange', function() {
        clearTimeout(window.rotateTimer);
        window.rotateTimer = setTimeout(function() {
            location.reload(); // Refresh page
        }, 250);
    });
    start(); // Start app
});

/* Responsive */

function responsiveGlobal() {
    if (window.innerWidth < 768) { // Mobile

    } else { // DT

    }
    // On resize finish
    clearTimeout(window.resizeTimerGlobal);
    window.resizeTimerGlobal = setTimeout(function() {

    }, 250);
}

/* Start */

function start() {

}

/* Global */