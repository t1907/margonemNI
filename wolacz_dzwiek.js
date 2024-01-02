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

var elite2Sound = new Audio("https://margonemskie-kalkulatory.opx.pl/DSE.mp3");
elite2Sound.autoplay = false;

var heroSound = new Audio("https://raw.githubusercontent.com/clasicker/addons/master/WH/detect.mp3");
heroSound.autoplay = false;

var titanSound = new Audio("https://raw.githubusercontent.com/clasicker/addons/master/WH/detect.mp3");
titanSound.autoplay = false;

function run(Engine) {
    var autoNotify = true;
    var alreadyNotify = [];

    if (Engine && Engine.npcs && Engine.npcs.check) window.API.addCallbackToEvent("newNpc", function(npc) {
        if (npc.d.wt > 19 && npc.d.wt <=79) {
            elite2Sound.volume = 0.30;
            elite2Sound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
        if (npc.d.wt > 79 && npc.d.wt <=99) {
            if(Engine.hero.d.clan && autoNotify && !alreadyNotify.includes(npc.d.id)){
                _g('chat&channel=clan', !1,{
                c: `Heros ${npc.d.nick} (${npc.d.lvl}lvl) na mapie ${Engine.map.d.name} (${npc.d.x},${npc.d.y})`
            });
            }
            alreadyNotify.push(npc.d.id);
            heroSound.volume = 0.30;
            heroSound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
        if (npc.d.wt > 99 ) {
            if(Engine.hero.d.clan && autoNotify && !alreadyNotify.includes(npc.d.id)){
                _g('chat&channel=clan', !1,{
                c: `Tytan ${npc.d.nick} (${npc.d.lvl}lvl) na mapie ${Engine.map.d.name} (${npc.d.x},${npc.d.y})`
            });
            }
            alreadyNotify.push(npc.d.id);
            titanSound.volume = 0.30;
            titanSound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
    })
    else setTimeout(function() { run(window.Engine) }, 100)
}
run(window.Engine)
