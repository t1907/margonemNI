// ==UserScript==
// @name         Motyw
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @grant        none
// @run-at   document-start
// ==/UserScript==

(function() {
    let url = 'https://addons2.margonem.pl/get/150/150749dev.js';
    $.getScript(`${url}?v=${ts()}`);
})();
