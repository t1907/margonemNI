// ==UserScript==
// @name         Zestawy do walki Update
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @grant        none
// ==/UserScript==

function run(Engine){
    if (Engine && Engine.allInit){
        const style = document.createElement('style');
        style.textContent = `
            //.game-window-positioner .inventory_wrapper{top: 300px !important;}
            .one-handheld-build.active {border: 1px solid #3dff00 !important;}
            .one-handheld-build {
                box-shadow: inset 0 0 8px 3px #000;
                background: #101010 !important;
                border-radius: 1px !important;
                color: white;
                display: inline-block;
                min-width: 64px;
                width: fit-content;
                text-align: center;
                //left: 12px;
                //top: -42px;
                position: relative;
            }
        `;
        document.head.appendChild(style);

        function getBuilds(){
            var buildList = document.querySelectorAll('.one-handheld-build')
            //buildList.forEach(item => document.querySelector('.main-column.right-column').append(item))
            for (let i = 0; i < buildList.length; i++) {
                buildList.item(i).innerHTML = Object.values(Engine.buildsManager.getBuildsCommons().getBuildsName())[i].name
            }
        }
        getBuilds()
        window.API.addCallbackToEvent("close_battle", getBuilds);
    }else setTimeout(function() { run(window.Engine) }, 100)
}
run(window.Engine)