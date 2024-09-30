// ==UserScript==
// @name         Ulepszara Test
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @grant        none
// ==/UserScript==

function run(Engine){
    if (Engine && Engine.allInit){
        const style = document.createElement('style');
        style.textContent = `
            .ulepszara {
                box-shadow: inset 0 0 8px 3px #000;
                background: #101010 !important;
                border-radius: 1px !important;
                color: white;
                display: inline-block;
                min-width: 64px;
                width: fit-content;
                text-align: center;
                left: 12px;
                top: 20px;
                position: relative;
            }
        `;
        document.head.appendChild(style);
        var ulepszaraWindow = document.createElement('div')
        ulepszaraWindow.id = "ulepszara"
        document.body.appendChild(ulepszaraWindow);

}else setTimeout(function() { run(window.Engine) }, 100)
}
run(window.Engine)
