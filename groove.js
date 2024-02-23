// ==UserScript==
// @name         Groove Style
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @grant        GM_addStyle
// @run-at   document-start
// ==/UserScript==

GM_addStyle ( `

.cll-timer{font-family: Arial, Helvetica, sans-serif !important;}
.cll-timer-monster {color: #57e106 !important;}
//.cll-timer-highlighted {background: #93828242 !important}
.cll-timer-monster[style]{color: red !important;}

` );

