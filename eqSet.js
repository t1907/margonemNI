// ==UserScript==
// @name         EqSet
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @grant        none
// ==/UserScript==

function run(){
    if(!Engine){
        setTimeout(run, 100);
        return;
    }
    const style = document.createElement('style');
    style.textContent = `
        #eqSetContainer {
            position: absolute;
            z-index: 9998;
            padding: 5px;
            left: -100px;
            font-family: Arial, sans-serif;
        }
        .eqSet {
            width: 32px;
            height: 32px;
            line-height: 32px;
            margin: 3px;
            border: 1px solid #cf0a2c;
            display: inline-block;
            text-align: center;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    var eqSetContainer = document.createElement('div');
    eqSetContainer.id = "eqSetContainer";
    document.querySelector(".top-right").appendChild(eqSetContainer);
    var eqSet1 = document.createElement('div');
    var eqSet2 = document.createElement('div');
    var eqSet3 = document.createElement('div');
    eqSet1.className = "eqSet";
    eqSet2.className = "eqSet";
    eqSet3.className = "eqSet";
    document.getElementById("eqSetContainer").appendChild(eqSet1).innerHTML = "1";
    document.getElementById("eqSetContainer").appendChild(eqSet2).innerHTML = "2";
    document.getElementById("eqSetContainer").appendChild(eqSet3).innerHTML = "3";

    eqSet1.onclick = function(){
        _g("moveitem&set=1")
    }
    eqSet2.onclick = function(){
        _g("moveitem&set=2")
    }
    eqSet3.onclick = function(){
        _g("moveitem&set=3")
    }
}
run()