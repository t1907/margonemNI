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

var tSound = new Audio("https://raw.githubusercontent.com/clasicker/addons/master/WH/detect.mp3");
tSound.autoplay = false;

function run(Engine) {
    if (Engine && Engine.npcs && Engine.npcs.check) window.API.addCallbackToEvent("newNpc", function(npc) {
        if (npc.d.wt > 19 && npc.d.wt <=29) {
            eSound.volume = 0.20;
            eSound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
        if (npc.d.wt > 79 && npc.d.wt <=99) {
            if(Engine.hero.d.clan){
                _g('chat', false, {
                    c: `/k Znaleziono herosa ${npc.d.nick} (${npc.d.lvl}lvl) na mapie ${Engine.map.d.name} (${npc.d.x},${npc.d.y})`
                })
            }
            hSound.volume = 0.20;
            hSound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
        if (npc.d.wt > 99 && Engine.map.mode !==5) {
            if(Engine.hero.d.clan){
                _g('chat', false, {
                    c: `/k Znaleziono tytana ${npc.d.nick} (${npc.d.lvl}lvl) na mapie ${Engine.map.d.name} (${npc.d.x},${npc.d.y})`
                })
            }
            tSound.volume = 0.20;
            tSound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
    })
    else setTimeout(function() { run(window.Engine) }, 100)
}
run(window.Engine)