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

var heroSound = new Audio("https://github.com/t1907/margonemNI/raw/main/detector.mp3");
heroSound.autoplay = false;

var titanSound = new Audio("https://github.com/t1907/margonemNI/raw/main/titan-resp.mp3");
titanSound.autoplay = false;

function run(Engine) {
    var autoNotify = true;
    var alreadyNotify = [];
    var others = ["Kurka Niedobitka", "Piracka sakwa", "Duża piracka sakwa", "Zakopany piracki skarb", "Pierścieniak", "Olszówka", "Muchomor", "Tropiciel Herosów", "Wtajemniczony Tropiciel Herosów", "Doświadczony Tropiciel Herosów", "Ogromna płomiennica tląca", "Ogromna dzwonkówka tarczowata", "Ogromny bulwiak pospolity", "Ogromny mroźlarz", "Ogromny szpicak ponury"];

    if (Engine && Engine.npcs && Engine.npcs.check) window.API.addCallbackToEvent("newNpc", function(npc) {
        if (npc.d.wt > 19 && npc.d.wt <=79) {
            elite2Sound.volume = 0.5;
            elite2Sound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
        if(npc.d.wt >= 80 && npc.d.wt <= 99 || others.includes(npc.d.nick)){
            if(Engine.hero.d.clan && autoNotify && !alreadyNotify.includes(npc.d.id)){
                _g('chat&channel=clan', !1,{
                c: `Znaleziono ${getNpcType(npc)} ${npc.d.nick} (${npc.d.lvl}${npc.d.prof}) na mapie ${Engine.map.d.name} (${npc.d.x},${npc.d.y})`
            });
            }
            alreadyNotify.push(npc.d.id);
            heroSound.volume = 0.5;
            heroSound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
        if(npc.d.wt >= 100 && npc.d.wt <= 109){
            if(Engine.hero.d.clan && autoNotify && !alreadyNotify.includes(npc.d.id)){
                _g('chat&channel=clan', !1,{
                c: `Znaleziono ${getNpcType(npc)} ${npc.d.nick} (${npc.d.lvl}${npc.d.prof}) na mapie ${Engine.map.d.name} (${npc.d.x},${npc.d.y})`
            });
            }
            alreadyNotify.push(npc.d.id);
            titanSound.volume = 0.5;
            titanSound.play();
            setTimeout(changeTitleToPrevious, 1000);
        }
    })
    else setTimeout(function() { run(window.Engine) }, 100)
}
run(window.Engine)

function getNpcType(npc) {
    const npcId = Number(npc.d.id);
    if (npc.d.wt >= 80 && npc.d.wt <= 89)
        return 'herosa';
    if (npc.d.wt >= 90 && npc.d.wt <= 99)
        return 'kolosa';
    if (npc.d.wt >= 100 && npc.d.wt <= 109)
        return 'tytana';
    return '';
}