// ==UserScript==
// @name         Lootfilter
// @version      1.0
// @author       Bancewald
// @match        *.margonem.pl/
// @grant        none
// ==/UserScript==

function run(){
    if(!Engine){
        setTimeout(run, 100);
        return;
    }

    function newItemLooted(item){
        if(!Engine.loots){
            return;
        }
        var itemId = item.id
        var logicResult = USERLOGIC(item)
        if(logicResult == 'want'){
            Engine.loots.itemsDecision[itemId] = Engine.party ? "must" : "want"
        }
        else if(logicResult == 'not'){
            Engine.loots.itemsDecision[itemId] = "not"
        }
        else{
            Engine.loots.itemsDecision[itemId] = Engine.party ? "must" : "want"
        }
        Engine.loots.setLootItems()
    }

    Engine.items.fetch(Engine.itemsFetchData.FETCH_NEW_LOOT, newItemLooted)

}

run()


function USERLOGIC(item){
    if(item._cachedStats.hasOwnProperty("teleport")) 
    return 'want'
    else if(item.cl===16 || item.cl===21 || item.cl===22 || item.cl===15 
        || item._cachedStats.rarity == "common" || item._cachedStats.rarity == "unique" || item._cachedStats.rarity == "heroic") 
        return 'not'
    else return null
}