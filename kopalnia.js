// ==UserScript==
// @name         Obramowanie na kopalnie
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       Barkozo
// @match        https://*.margonem.pl/
// @grant        none
// ==/UserScript==

(() => {
    const ColorGroups = function(npc) {
        this.rx = npc.rx
        this.ry = npc.ry
        this.fw = npc.fw
        this.fh = npc.fh

        this.draw = (ctx) => {
            let i = Engine.mapShift.getShift();
            var n = 32 * this.rx + 16 - this.fw / 2 + (isset(this.offsetX) ? this.offsetX : 0) - Engine.map.offset[0] - i[0] + (void 0 !== this.leftPosMod ? this.leftPosMod : 0)
              , a = 32 * this.ry - this.fh + 32 + (isset(this.offsetY) ? this.offsetY : 0) - Engine.map.offset[1] - i[1];

            const img = new Image();
            img.src = "https://thantos.margonem.pl/img/mask.png";
            ctx.drawImage(img, n, a, npc.fw, npc.fh);
        };

        this.getOrder = () => npc.ry;
    };

    const getDrawableList = () => {
        const npcs = Object.values(Engine.npcs.check())
               .filter(npc => npc.d.nick === "Porzucony kilof" || npc.d.nick === "Zamrożony czarodziej" || npc.d.nick === "Erktos");
        return npcs.map(npc => new ColorGroups(npc));
    };

    API.addCallbackToEvent('call_draw_add_to_renderer', () => Engine.renderer.add.apply(Engine.renderer, getDrawableList()));
})();
