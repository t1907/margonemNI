// ==UserScript==
// @name         Własny dźwięk na e2-heros-tytan + auto wołacz na klan
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @grant        none
// ==/UserScript==

function run(Engine) {
    const others = [170014, 173615, 182963, 190415, 190417, 190420, 190421, 190422, 190423, 190424, 190425, 190426, 190428, 190429, 190430, 190431, 190432, 190433, 190434, 190435, 190436, 215338, 215339, 215340, 215341, 215342, 215343, 215344, 215345, 215346, 215347, 215347, 215349, 215350, 215351, 215352, 215353, 215354, 215355, 215356, 215359, 266720, 250068, 250069, 250070, 250071, 250072, 250073, 250074, 250075, 250076, 250077, 282581, 282583, 282584, 282585, 282586, 282587, 282588, 282589, 282590, 282591, 289062, 289063, 289064, 289065, 289066, 289067, 289068, 289069, 289070, 289071, 289072, 289073, 289074, 289075, 289076, 289077, 289078, 289079, 289080, 289081, 236992, 295610, 295611, 295612, 295613, 295614, 295615, 295616, 295617, 295618, 295619, 295620, 308322, 308323, 308324, 308345, 304710, 304711, 304712, 304713, 304714, 304715, 304716, 304717];

    if (Engine && Engine.npcs && Engine.npcs.check) window.API.addCallbackToEvent("newNpc", function(npc) {
        if (npc.d.wt > 19 && npc.d.wt <=79) {
            var elite2Sound = new Audio("https://margonemskie-kalkulatory.opx.pl/DSE.mp3");
            elite2Sound.autoplay = false;
            elite2Sound.volume = 0.5;
            elite2Sound.play();
        }
        if(npc.d.wt >= 80 && npc.d.wt <= 109 || others.includes(npc.d.id)){
            var titanSound = new Audio("https://github.com/t1907/margonemNI/raw/main/titan-resp.mp3");
            titanSound.autoplay = false;
            titanSound.volume = 0.5;
            titanSound.play();
            chatNotify(npc)
        }
    })
    else setTimeout(function() { run(window.Engine) }, 100)
}
run(window.Engine)

function getNpcType(npc) {
    const npcId = Number(npc.d.id);
    if (npc.d.wt >= 80 && npc.d.wt <= 89)
        return 'Heros';
    if (npc.d.wt >= 90 && npc.d.wt <= 99)
        return 'Kolos';
    if (npc.d.wt >= 100 && npc.d.wt <= 109)
        return 'Tytan';
    return '';
}
function chatNotify(npc){
    if(Engine.hero.d.clan){
        _g('chat&channel=clan', !1,{
            c: `${getNpcType(npc)}! ${npc.d.nick} (${npc.d.lvl}${npc.d.prof}) na mapie ${Engine.map.d.name} (${npc.d.x},${npc.d.y})`
        });
    }
}