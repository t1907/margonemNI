// ==UserScript==
// @name         Loottext
// @version      1.0
// @author       Barkozo
// @match        *.margonem.pl/
// @grant        none
// ==/UserScript==

function run(Engine) {

    function newItemLooted(e) {
        if (e.itemTypeName == "legendary") {
            message("<span style='color:#ff0000'>[L]</span> Święty <span style='color:white'>Mikołaj</span> &#127877 przyniósł Ci: <br> <span style='color:gold'>" + e.name + "</span> <br> &#127876 Wesołych Świąt &#127876",);
        }
    }

    if (Engine && Engine.items) {
        Engine.items.fetch(Engine.itemsFetchData.FETCH_NEW_LOOT_ITEM, newItemLooted)
    } else setTimeout(function() { run(window.Engine) }, 100)


}

run(window.Engine)
