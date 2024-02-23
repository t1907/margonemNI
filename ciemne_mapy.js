// ==UserScript==
// @name         Ciemne mapy
// @match        https://*.margonem.pl/
// @grant        none
// ==/UserScript==

(function(drawMap) {
            window.Engine.map.draw = function(ctx) {
                let call = drawMap.call(this, ctx);

                const size = window.Engine.getCanvasViewSize();

        ctx.globalAlpha = (100 - 50) / 100;
        ctx.fillRect(0, 0, size.width, size.height);
        ctx.globalAlpha = 1.0;

                return call;
            };
        })
(window.Engine.map.draw);

