// ==UserScript==
// @name         Własny dźwięk na e2/heros/tytan + auto wołacz na klan
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @grant        none
// ==/UserScript==

function changeTitleToPrevious()
{
  document.title = "Margonem MMORPG";
}

var eSound = new Audio("https://margonemskie-kalkulatory.opx.pl/DSE.mp3");
eSound.autoplay = false;

var hSound = new Audio("https://raw.githubusercontent.com/clasicker/addons/master/WH/detect.mp3");
hSound.autoplay = false;

function run(Engine) {
    var justCalled = [];

    if (Engine && Engine.npcs && Engine.npcs.check) window.API.addCallbackToEvent("newNpc", function(npc) {
        if (npc.d.wt > 19 && npc.d.wt <=29 || npc.d.nick === "Erktos") {
            eSound.volume = 0.30;
            eSound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
        if (npc.d.wt > 79 && npc.d.wt <=99 || npc.d.wt > 99) {
            if(Engine.hero.d.clan && !justCalled.includes(npc.d.id)){
                _g('chat&channel=clan', !1,{
                c: `${npc.d.nick} (${npc.d.lvl}lvl) na mapie ${Engine.map.d.name} (${npc.d.x},${npc.d.y})`
            });
            }
            justCalled.push(npc.d.id);
            hSound.volume = 0.30;
            hSound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
    })
    else setTimeout(function() { run(window.Engine) }, 100)
}
run(window.Engine)
