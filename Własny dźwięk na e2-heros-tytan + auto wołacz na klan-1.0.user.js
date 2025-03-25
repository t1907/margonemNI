// ==UserScript==
// @name         Własny dźwięk na e2-heros-tytan + auto wołacz na klan
// @version      1.8
// @author       Barkozo
// @match        *.margonem.pl/
// @grant        none
// ==/UserScript==

let settings = JSON.parse(localStorage.getItem("herosBarko_settings")) || {
    chatNotifyEnabled: true,
    eliteSound: "https://margonemskie-kalkulatory.opx.pl/DSE.mp3",
    heroSound: "https://margonemskie-kalkulatory.opx.pl/DSE.mp3",
    titanSound: "https://margonemskie-kalkulatory.opx.pl/DSE.mp3",
    eliteVolume: 0.5,
    heroVolume: 0.5,
    titanVolume: 0.5,
};

function run(Engine) {
    if (Engine && Engine.npcs && Engine.npcs.check) {
        window.API.addCallbackToEvent("newNpc", function(npc) {
            if (npc.d.wt >= 10 && npc.d.wt < 40) {
                playSound(settings.eliteSound, settings.eliteVolume);
            }
            if (npc.d.wt >= 80 && npc.d.wt < 90) {
                playSound(settings.heroSound, settings.heroVolume);
                if (settings.chatNotifyEnabled) chatNotify(npc);
            }
            if (npc.d.wt >= 100 && npc.d.wt < 110) {
                playSound(settings.titanSound, settings.titanVolume);
                if (settings.chatNotifyEnabled) chatNotify(npc);
            }
        });
    } else {
        setTimeout(() => run(window.Engine), 100);
    }
}
run(window.Engine);

function chatNotify(npc) {
    if (Engine.hero.d.clan) {
        _g('chat&channel=clan', false, {
            c: `${getNpcType(npc)}! ${npc.d.nick} (${npc.d.lvl}${npc.d.prof}) na mapie ${Engine.map.d.name} (${npc.d.x},${npc.d.y})`
        });
    }
}

function playSound(url, volume) {
    const sound = new Audio(url);
    sound.volume = volume;
    sound.play();
}