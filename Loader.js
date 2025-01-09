// ==UserScript==
// @name         Motyw Loader
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @match        *.margonem.com/
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

GM_xmlhttpRequest({
    method : "GET",
    url : "http://example.org/script.js",
    onload : (ev) =>
    {
      let e = document.createElement('script');
      e.innerText = ev.responseText;
      document.head.appendChild(e);
    }
  });