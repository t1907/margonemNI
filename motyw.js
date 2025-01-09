// ==UserScript==
// @name         Black&White
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @match        *.margonem.com/
// @resource   IMPORTED_CSS https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/Black%26White.css
// @grant      GM_getResourceText
// @grant      GM_addStyle
// @run-at   document-start
// ==/UserScript==

(function() {
    const my_css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(my_css);
})();