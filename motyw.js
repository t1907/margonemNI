// ==UserScript==
// @name         Motyw
// @version      2.0
// @match        https://*.margonem.pl/
// @match        https://*.margonem.com/
// @icon         https://i.imgur.com/9JJ5YyK.png
// @grant        none
// ==/UserScript==

(function() {
    let url = 'https://addons2.margonem.pl/get/150/150749dev.js';
    $.getScript(`${url}?v=${ts()}`);
})();