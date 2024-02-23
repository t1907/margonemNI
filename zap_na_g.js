// ==UserScript==
// @name         Zapraszanie graczy na mapie na G
// @version      1.2
// @author       Bancewald
// @match        *.margonem.pl/
// @grant        none
// ==/UserScript==

(Engine => {

    function is_chat_focused() {
        if (document.activeElement.tagName == "MAGIC_INPUT" || document.activeElement.tagname == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
            return true
        }
        return false
    }

    function applicable_distance(otherX,otherY){
        if(Math.abs(otherX - Engine.hero.d.x)>1) return false;
        if(Math.abs(otherY - Engine.hero.d.y)>1) return false;
        return true;
    }

    function is_he_in_party(id){
        if(!Engine.party)
            return false
        if(Engine.party.getLeaderId()!=Engine.hero.d.id)
            return true
        for (let i = 0 ; i < Object.keys(Engine.party.getMembers()).length ; i++){
            if(Object.keys(Engine.party.getMembers())[i] == id) return true
        }
        return false
    }

    function add_to_group(e){
        if(e.which === 71){
            var list = Engine.others.getDrawableList()
            for(let i = 0 ; i < list.length ; i++){
                if(list[i].isPlayer){
                    if((list[i].d.relation == 2 || list[i].d.relation == 4 || list[i].d.relation == 5 || applicable_distance(list[i].d.x,list[i].d.y)) && !is_he_in_party(list[i].d.id) && !is_chat_focused())
                        _g("party&a=inv&id=" + list[i].d.id)
                }
            }
        }
    }

    document.addEventListener('keydown', add_to_group)
})(window.Engine)
