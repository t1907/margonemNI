(function() {
  $(`<style>
#GAME_CANVAS {image-rendering: auto !important;}

.gargonem-otherlist-other-button{color: lime !important;}
.gargonem-window {color: #000000 !important; background: #101010; border-radius:0!important; box-shadow: 0 0 0 1px #000, 0 0 0 2px #808080, 0 0 0 3px #000000, 2px 2px 3px 3px #000 !important;}

.cll-alert-content{background: #101010 !important;color: #dcdcdc !important;}
.cll-alert{border: 1px solid #808080 !important; box-shadow: 0 0 0 1px #808080 !important; background: #101010 !important; color: #dcdcdc !important;}
.cll-alert button{background: #101010 !important; border: 1px solid #808080 !important; box-shadow: 0 0 0 1px #101010 !important;}
.cll-alert button:hover {border: 1px solid lime !important;}
.cll-alert button:focus {border: 1px solid #40ff40 !important;}
.cll-timer{font-family: Arial, Helvetica, sans-serif !important;}
.cll-timer-highlighted {background: #0a1f42 !important}
.cll-timer-monster[style]{color: red !important;}

.interface-element-border-window-frame, .battle-controller .graphics .battle-border, .additional-skill-panel .graphics .additional-skill-panel-border, .border-window{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/window-frame.png) 32 20 fill repeat;
  background-size:100% 100%
}
.border-window{
  color: #dcdcdc;
}

.interface-element-grid-border {outline: 1px solid #101010; box-shadow: 0 0 0 1px #404040;}
.interface-element-border-window-header-middle{box-shadow:inset 0 1px 0 0 #808080;background:#101010}

.interface-element-one-item-slot-background-to-repeat, .interface-element-item-slot-grid-stretch{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/oneItemSlotToRepeat.png)}
.interface-element-one-item-slot {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png) no-repeat -800px -79px;}
.interface-element-one-item-slot-decor{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png) -857px -828px}
.interface-element-vertical-wood{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/middle_graphics.png) repeat}

.interface-element-active-card-border-image{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button.png) 5 fill repeat stretch}
.interface-element-active-card-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button.png) no-repeat;background-size:100% 100%}
.interface-element-active-card-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button.png) 5 fill repeat stretch}
.interface-element-card-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button-active.png) no-repeat;background-size:100% 100%}
.interface-element-card-background-stretch{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button-active.png) no-repeat;background-size:100% 100%}

.interface-element-wood-box-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/info-box-2.png);background-size:100% 100%}

.interface-element-green-box-background{background:#101010}
.interface-element-green-box-background-stretch{background:#101010}

.interface-element-background-color-1, .interface-element-background-color-2, .interface-element-background-color-3, .interface-element-background-color-4{background:#101010}

.interface-element-box-shadow-1{box-shadow:inset 0 0 5px 0 #808080}
.interface-element-box-shadow-2{box-shadow: 0 0 0 1px #808080}

.interface-element-one-item-slot-2{border: 1px solid #808080;outline: 2px solid #101010; background: #101010; box-shadow: inset 2px 0 15px 1px #000;}

.interface-element-middle-1-background, .interface-element-middle-2-background, .interface-element-middle-3-background, .interface-element-middle-4-background{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/middle_graphics.png) 0 11 fill round;background:#101010
}

.interface-element-bottom-bar-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/quest_bar.png) 0 20 fill stretch}

.interface-element-header-1-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/table_header.png) 0 20 fill stretch}
.interface-element-header-2-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/match-bar.png) 7 14 fill stretch}

.interface-element-table-td-3-border{border:1px solid #808080}
.interface-element-table-header-3-border{border:1px solid #808080}
.interface-element-table-header-3-background{background:#101010}
.interface-element-table-3{color:#f0f0f0}
.interface-element-table-3 .table-header-tr td{border:1px solid #808080;background:#101010}
.interface-element-table-3 tr:nth-of-type(2n+1){background: #101010;}
.interface-element-table-3 td{border:1px solid #808080}
.interface-element-table-header-1-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/table_header.png);background-size:100% 100%}

.interface-element-middle-1-background-stretch, .interface-element-middle-2-background-stretch, .interface-element-middle-3-background-stretch{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/middle_graphics.png) 0 11 fill round;background:#101010
}
.interface-element-line-1-background{background:#101010}

.interface-element-bottom-bar-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/quest_bar.png) 0 20 fill stretch;}

.interface-element-header-1-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/table_header.png) 0 20 fill stretch}
.interface-element-header-2-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/match-bar.png) 7 14 fill stretch}
.interface-element-header-1{color:#f0f0f0}

.shop-wrapper .shop-content .shop-items.scrollable .scroll-pane{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/oneItemSlotToRepeat.png)}

.additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane::after,
.additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane::after{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/middle_graphics.png) 0 11 fill round;background:#101010}

.tabs-nav .card.active{pointer-events:none;background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button.png) no-repeat;background-size:100% 100%;color:#f0f0f0}

.drop-down-menu-section .content-wrapper .item-category-wrapper .drop-down-menu-item.selected{
  color:#f0f0f0;background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button.png) no-repeat;background-size:100% 100%
}

.depo .bottom-section .cards-menu .card:not(.disabled).active::before{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button.png) 17 20 fill repeat}
.matchmaking-ranking .ranking-tabs .cards-header .active{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button.png) no-repeat;background-size:100% 100%;color:#f0f0f0}
.cards-header-wrapper .cards-header .card.active{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button.png) no-repeat;background-size:100% 100%;color:#f0f0f0}

.tabs-nav .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#f0f0f0}
.drop-down-menu-section .content-wrapper .item-category-wrapper .drop-down-menu-item{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button-active.png) no-repeat;background-size:100% 100%}
.auction-off-item-panel input.default,.auction-window input.default{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button-active.png) no-repeat;background-size:100% 100%;border:1px solid #808080;color:#f0f0f0}
.depo .bottom-section .cards-menu .card::before{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button-active.png) 17 20 fill repeat}
.matchmaking-ranking .ranking-tabs .cards-header .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#f0f0f0}
.cards-header-wrapper .cards-header .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#f0f0f0}
.battle-pass-window .cards-header-wrapper .cards-header .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#f0f0f0}

.search-wrapper{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/search.png) 5 9 23 34 fill}

.tabs-nav::before{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/friend-header.png) 11 13 fill stretch}
.mails-window .cards-header-wrapper .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/friend-header.png) 11 13 fill stretch}
.depo .bottom-section .cards-menu .cards-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/friend-header.png) 11 13 fill stretch}
.matchmaking-ranking .ranking-tabs .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/friend-header.png) 11 13 fill stretch}
.cards-header-wrapper .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/friend-header.png) 11 13 fill stretch}
.battle-pass-window .cards-header-wrapper .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/friend-header.png) 11 13 fill stretch}

.interface-layer {border: 7px solid transparent;border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/oi7QxzB.png) 7 repeat !important;box-sizing: border-box;}
.layer.interface-layer .main-column.right-column{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/background.png) -251px 0}
.layer.interface-layer .main-column.right-column .border{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/background.png) -251px 0}
.layer.interface-layer .main-column .extended-stats .border{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/background.png) -251px 0}
.layer.interface-layer .positioner.top .bg{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/gora.png) 0 -61px repeat}
.layer.interface-layer .positioner.bottom .bg{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/dol.png) 0 0 repeat}

.layer.interface-layer .positioner.top .hud-container {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/buttony.png) -87px -109px}
.layer.interface-layer .positioner.top .hud-container .map_ball {background: url(https://i.imgur.com/y8yj4E7.png);}
.bottom-panel-of-bottom-positioner .bottom-panel-graphic {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/buttony.png) no-repeat -256px -870px;}
.bottom-panel-of-bottom-positioner .exp-bar-wrapper .exp-progress .overlay {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/buttony.png) no-repeat -450px -955px}
.bottom-panel-of-bottom-positioner .exp-bar-wrapper .exp-progress.right .overlay {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/buttony.png) no-repeat -450px -976px}
.bottom-panel-pointer-bg .pointer-exp-graphic{background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/buttony.png) no-repeat -704px -953px}
.bottom-panel-pointer-bg .pointer-ttl-graphic{background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/buttony.png) no-repeat -777px -953px}
.bottom-panel-of-bottom-positioner .glass {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/buttony.png) no-repeat -701px -1016px}
.clan-treasury-content .scroll-wrapper .scroll-pane .right-part .outfit-content {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/buttony.png) no-repeat 0 -867px;}

.border-window .content {background: #101010;}
.border-window .header-label-positioner .header-label .left-decor,.border-window .header-label-positioner .header-label .right-decor{background: 0 0 !important;}
.border-window .header-label-positioner .header-label .text{color: #dcdcdc; line-height:28px; margin-top: 5px; text-align:center}
.border-window .header-label-positioner .header-label, 
.trade-window header .h_background .middle, 
.trade-window header .h_background .left, 
.trade-window header .h_background .right { background: 0 0; box-shadow: none;}
.trade-window .content .hero-show-item, .trade-window .content .other-watch-item {background: #101010;}
.trade-window .content .decision .dec-item, .trade-window .content .decision .hero_decision{color: #dcdcdc;}

.border-window.transparent .header-label-positioner{top: -45px;}

.battle-pass-window .section .scroll-wrapper .battle-pass-bg, .bonus-selector-wnd__bg, .bonus-reselect-wnd__bg{background-size: contain;}

.tw-list-item{background: #101010 !important;}
.border-window.transparent .border-image, .dialogue-window .border-image{box-shadow: 0 0 0 1px #808080; border-radius: 0;}

.border-window.mAlert .paper-background, .border-window.mAlert-mobile-layer .paper-background {background: #101010;}
.auction-window .main-column-auction {background: #101010;}
.auction-window .main-column-auction .auction-search-item{border:1px solid #808080}

.mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .one-mail-head .from b {color: #dcdcdc;}
.mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .mail-footer {color: #dcdcdc;}
.mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .msg-content{color: #dcdcdc;}
.mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper {background: #101010;}

.shop-wrapper .shop-background.normal-shop-zl .canopy {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/normal-shop-gold.png) 0 -34px}
.shop-wrapper .shop-background.normal-shop-sl .canopy {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/normal-shop-gold.png) 0 -34px}
.shop-wrapper .shop-background.pet-shop-zl .canopy{}
.shop-wrapper .shop-background.pet-shop-sl .canopy{}
.shop-wrapper .shop-background .paper-1,.shop-wrapper .shop-background .paper-2 {background: #101010; box-shadow: inset 0 0 1px 0 #808080;}

.clan, .addons-panel .left-column .main-header .addon-list-label, .skills-window .left-column .list-label-wrapper .list-label .label, 
.left-grouped-list-and-right-description-window .main-header .left-column-list-label{color: #dcdcdc;}
.border-window.mAlert .content .inner-content, .border-window.mAlert-mobile-layer .content .inner-content{color: #dcdcdc;}
.left-grouped-list-and-right-description-window{color: #dcdcdc;}
.left-grouped-list-and-right-description-window .left-column .scroll-wrapper{border: 1px solid #808080}

.world-window__info, .info-box, .salvage__info, .enhance__info, .extraction__info{border: 1px solid #808080 !important; background: #101010 !important;}
.hunting-statistics-table td, .hunting-statistics-table-header td {border: 1px solid #808080 !important; background: #101010;}
.players-online__item, .server-parameters__item .location-parameters__item{border: 1px solid #808080 !important; background: #101010;}

.crafting-reagent{background: #101010; border: 1px solid #808080}

.additional-skill-panel{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/grey/skill_hot_skills.png)}

.game-window-positioner .character_wrapper .stats-wrapper .header-title{background: #808080 !important; border-bottom: 1px solid #808080 !important;}
.game-window-positioner .character_wrapper .stats-wrapper .interface-element-active-card-background-stretch{left: 0; right: 0;}
.game-window-positioner .inventory_wrapper .inventory-grid-bg {border: 1px solid #101010;}

.chat-channel-card-wrapper{border: 1px solid #808080 !important;}
.new-chat-window .chat-message-wrapper, .chat-input-wrapper .magic-input-wrapper, 
.chat-input-wrapper .control-wrapper .menu-card, .chat-input-wrapper .control-wrapper .chat-config-wrapper {border: 1px solid #808080 !important; box-shadow: none;}
.chat-input-wrapper {background: #101010 !important;}
.new-chat-window {background: #101010 !important;}
.chat-configure-window .chat-option-header {color: #dcdcdc !important; border: 1px solid #808080 !important; background: #101010 !important;}

.left-grouped-list-and-right-description-window .right-column .right-scroll .scroll-pane .reagents-label{color: #dcdcdc}
.one-item-on-divide-list .name-wrapper{color: #dcdcdc}
.one-item-on-divide-list .name-wrapper:hover{color: #a4a4a4}

.console-window .scroll-wrapper .scroll-pane .console-content{color: #dcdcdc}
.skills-window .right-column, .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .requirements-wrapper,
.skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .stats-wrapper,
.skills-window .right-column .scroll-wrapper .scroll-pane .empty{color: #dcdcdc}

.MBEditor .buttons-wrapper .checkbox-wrapper .mb-label,.MBEditor .buttons-wrapper .clear-btn .mb-label,.MBEditor .buttons-wrapper .close-btn .mb-label,.MBEditor .buttons-wrapper .save-btn .mb-label {color: #dcdcdc}
.MBEditor .skills-list .single-skill-row {border-bottom: 1px solid #808080}
.MBEditor .skills-list .single-skill-row.usable {border-color: #808080}
.MBEditor .skills-list .single-skill-row.usable:nth-child(odd) {background: rgba(47, 95, 95, 0.25)} 
.MBEditor .skills-list .single-skill-row.usable .number {border-color: #808080}
.MBEditor .skills-list .single-skill-row.usable:hover {background: #5f5f5f}
.MBEditor .skills-list .single-skill-row .number {border-right: 1px solid #808080} 


.loot-window{color: #dcdcdc}
.loot-window.colorized.t-her .middle-graphics:after{
background:radial-gradient(ellipse at center,rgba(112,179,224,.8) 0,rgba(255,255,255,0) 100%)}
.loot-window.colorized.t-leg .middle-graphics:after{
background:radial-gradient(ellipse at center,rgba(220,95,40,.8) 0,rgba(255,255,255,0) 100%)}
.loot-window.colorized.t-upgraded .middle-graphics:after{
background:radial-gradient(ellipse at center,rgba(187,77,151,.8) 0,rgba(255,255,255,0) 100%)}
.loot-window.colorized.t-uniupg .middle-graphics:after{
background:radial-gradient(ellipse at center,rgba(245,235,0,.8) 0,rgba(255,255,255,0) 100%)}
.loot-window.colorized.t-art .middle-graphics:after{
background:radial-gradient(ellipse at center,rgba(186,68,36,.8) 0,rgba(255,255,255,0) 100%)}

.loot-window .info{border-top:1px solid #3e3e3e;border-bottom:1px solid #3e3e3e}
.loot-window .info .loot-time{color: #d7b800}
.loot-window .items-wrapper .loot-item-wrapper{box-shadow:2px 2px 2px 0 rgba(0,0,0,.6);border:1px solid #808080}
.loot-window .items-wrapper .loot-item-wrapper.yours{border:solid 1px #ffdd00}
.loot-window .items-wrapper .loot-item-wrapper .slot{border:1px solid #808080}
.loot-window .items-wrapper .loot-item-wrapper .text-info{color: #dcdcdc;border-top:1px solid #808080;border-bottom:1px solid #808080} 
.loot-window .items-wrapper .loot-item-wrapper .button-holder .button.green{border-color: #5f5f5f}
.loot-window .bottom-wrapper .table-wrapper .bag-left,.loot-window .bottom-wrapper .table-wrapper .time-left{color: #dcdcdc}

.ni-input input.default {border: 1px solid #808080;border-radius: 0;background: #101010;box-shadow: inset 0 0 1px 1px #101010;color: #dcdcdc;}

.alerts-layer .big-messages .message .inner,
.console-layer .big-messages .message .inner,
.mAlert-layer .big-messages .message .inner,
.mAlert-mobile-layer .big-messages .message .inner {
  background: -webkit-linear-gradient(left, rgba(16, 0, 16, 0), rgba(16, 0, 16, 0.5), rgba(16, 0, 16, 0));
  background: -o-linear-gradient(left, rgba(16, 0, 16, 0), rgba(16, 0, 16, 0.5), rgba(16, 0, 16, 0));
  background: -moz-linear-gradient(left, rgba(16, 0, 16, 0), rgba(16, 0, 16, 0.5), rgba(16, 0, 16, 0));
  background: linear-gradient(to right, rgba(16, 0, 16, 0), rgba(16, 0, 16, 0.5), rgba(16, 0, 16, 0));
}

.popup-menu {
  box-shadow: 0 0 0 1px #404040 inset, 0 0 0 1px #808080b0, 0 0 0 2px #404040;
  border-radius: 0;
  background-color: #101010;
}
.alerts-layer .scroll-wrapper.menu-wrapper,
.console-layer .scroll-wrapper.menu-wrapper,
.mAlert-layer .scroll-wrapper.menu-wrapper,
.mAlert-mobile-layer .scroll-wrapper.menu-wrapper {
  box-shadow: 0 0 0 1px #404040 inset, 0 0 0 1px #808080b0, 0 0 0 2px #404040;
  border-radius: 0;
  background-color: #101010;
}

.popup-menu .menu-item {
  border-radius: 0;
  background-color: #101010;
  color: #dcdcdc;
  border: 1px solid #808080;
}
.alerts-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option,
.console-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option,
.mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option,
.mAlert-mobile-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option {
  border-radius: 0;
  background-color: #101010;
  color: #dcdcdc;
  border: 1px solid #808080;
}

.popup-menu .menu-item.one-step-skill-menu:not(.disabled) {
  border: 1px solid #5f5f5f;
  background-color: #202020;
}

.alerts-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled),
.console-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled),
.mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled),
.mAlert-mobile-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled) {
  border: 1px solid #5f5f5f;
  background-color: #202020;
}

.popup-menu .menu-item.one-step-skill-menu:not(.disabled):hover {
border: 1px solid #5f5f5f;
background-color: #202020;
}
.popup-menu .menu-item.menu-item--red {background: #8a001e;border-color: #ff003c;color: #fff;}
.popup-menu .menu-item.menu-item--red:hover:not(.label):not(.disabled):not(.cooldown-disabled):not(.one-step-skill-menu) {background: #a00026;border-color: #ff1444;}
.popup-menu .menu-item.menu-item--debug {background: #8a001e;border-color: #ffaa00;color: #fff;}
.popup-menu .menu-item.menu-item--debug:hover:not(.label):not(.disabled):not(.cooldown-disabled):not(.one-step-skill-menu) {background: #a00026;border-color: #ffc04d;}
.popup-menu .menu-item.disabled,.popup-menu .menu-item.cooldown-disabled {background-color: #5f5f5f; color: #7a7a7a;border: 1px solid #202020;opacity: 0.7;}
.popup-menu .menu-item:hover:not(.label):not(.disabled):not(.cooldown-disabled):not(.one-step-skill-menu) {border: 1px solid #7a7a7a;background-color: #3f3f3f;}
.popup-menu .s_cost {border: 1px solid rgba(100, 0, 100, 0.3);border-radius: 0;background-color: rgba(100, 0, 100, 0.2);color: #b08cd9;}

.button,.widget-button{
  border-radius:0;
  background-color:#101010;
  box-shadow:inset 0 0 0 1px #808080,inset 0 0 0 3px #101010;
  border:solid 1px #101010;
  background-image:linear-gradient(to top, #101010, #101010);
  box-shadow:inset 0 0 1px 1px #808080,inset 0 0 0 3px #101010;
  color: #dcdcdc;
}

.button.red,.widget-button.red{
  background-image:linear-gradient(to top, #101010, #101010);
  box-shadow:inset 0 0 1px 1px #4a1e1e,inset 0 0 0 3px #101010
}

.button.green,.widget-button.green, 
.button.blue,.widget-button.blue,
.button.purple,.button.violet,.widget-button.purple,.widget-button.violet,
.button.orange,.widget-button.orange,
.button.transparent,.widget-button.transparent,
.button.blink-violet,.widget-button.blink-violet{
  background-image:linear-gradient(to top, #101010, #101010);
  box-shadow:inset 0 0 1px 1px #808080,inset 0 0 0 3px #101010
}
.button::before,.widget-button::before,
.button.green::before,.widget-button.green::before, 
.button.red::before,.widget-button.red::before,
.button.blue::before,.widget-button.blue::before,
.button.purple::before,.button.violet::before,.widget-button.purple::before,.widget-button.violet::before,
.button.orange::before,.widget-button.orange::before,
.button.transparent::before,.widget-button.transparent::before,
.button.blink-violet::before,.widget-button.blink-violet::before{
  box-shadow:inset 0 0 1px 1px #101010;
  border-radius:0;
}
.button.active::before,.widget-button.active::before,
.button.green.active::before,.widget-button.green.active::before,
.button.red.active::before,.widget-button.red.active::before, 
.button.blue.active::before,.widget-button.blue.active::before,
.button.purple.active::before,.button.violet.active::before,.widget-button.purple.active::before,.widget-button.violet.active::before,
.button.orange.active::before,.widget-button.orange.active::before,
.button.transparent.active::before,.widget-button.transparent.active::before,
.button.blink-violet.active::before,.widget-button.blink-violet.active::before{
  box-shadow:inset 0 0 1px 1px #101010
}
.button.window-is-open::before,.widget-button.window-is-open::before,
.button.green.window-is-open::before,.widget-button.green.window-is-open::before,
.button.red.window-is-open::before,.widget-button.red.window-is-open::before,
.button.blue.window-is-open::before,.widget-button.blue.window-is-open::before,
.button.purple.window-is-open::before,.button.violet.window-is-open::before,.widget-button.purple.window-is-open::before,.widget-button.violet.window-is-open::before,
.button.orange.window-is-open::before,.widget-button.orange.window-is-open::before,
.button.transparent.window-is-open::before,.widget-button.transparent.window-is-open::before,
.button.blink-violet.window-is-open::before,.widget-button.blink-violet.window-is-open::before{
  background-color: #101010
}

.button.pressed,.widget-button.pressed, 
.button.black,.widget-button.black,body.mobile-version .button:not(.no-hover):not(.disabled):active,
body.mobile-version .widget-button:not(.no-hover):not(.disabled):active,
body:not(.mobile-version) .button:not(.no-hover):not(.disabled):hover:not(.active),
body:not(.mobile-version) .widget-button:not(.no-hover):not(.disabled):hover:not(.active){
  background-image:linear-gradient(to top, #202020, #202020);
  box-shadow:inset 0 0 1px 1px #5f5f5f,inset 0 0 0 3px #202020
}
.button.pressed::before,.widget-button.pressed::before,
.button.black::before,.widget-button.black::before,
body.mobile-version .button:not(.no-hover):not(.disabled):active::before,
body.mobile-version .widget-button:not(.no-hover):not(.disabled):active::before,
body:not(.mobile-version) .button:not(.no-hover):not(.disabled):hover:not(.active)::before,
body:not(.mobile-version) .widget-button:not(.no-hover):not(.disabled):hover:not(.active)::before{
  box-shadow:inset 0 0 1px 1px #202020;
  border-radius:0;
}

.button.pressed.active::before,.widget-button.pressed.active::before,
.button.black.active::before,.widget-button.black.active::before,
body.mobile-version .button:not(.no-hover):not(.disabled):active.active::before,
body.mobile-version .widget-button:not(.no-hover):not(.disabled):active.active::before,
body:not(.mobile-version) .button:not(.no-hover):not(.disabled):hover:not(.active).active::before,
body:not(.mobile-version) .widget-button:not(.no-hover):not(.disabled):hover:not(.active).active::before{
box-shadow:inset 0 0 1px 1px #202020
}
.button.pressed.window-is-open::before,.widget-button.pressed.window-is-open::before,
.button.black.window-is-open::before,.widget-button.black.window-is-open::before,
body.mobile-version .button:not(.no-hover):not(.disabled):active.window-is-open::before,
body.mobile-version .widget-button:not(.no-hover):not(.disabled):active.window-is-open::before,
body:not(.mobile-version) .button:not(.no-hover):not(.disabled):hover:not(.active).window-is-open::before,
body:not(.mobile-version) .widget-button:not(.no-hover):not(.disabled):hover:not(.active).window-is-open::before{
background-color: #202020
}
.widget-button .widget-blink{display: none !important;}

.card-content .clan-list-find-panel input.default,.card-content .green-box input.default {border: 1px solid #808080;}

.card-content .clan-other-members-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr .big-height-td{color: #dcdcdc;}

.card-content .clan-bless-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-diplomacy-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-edit-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-edit-official-page-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-edit-priv-page-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-history-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-info-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-list-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-manage-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-members-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-official-page-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-other-members-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-other-recruit-content:not(.clan-official-page-content):not(.clan-priv-page-content) table,
.card-content .clan-priv-page-content:not(.clan-official-page-content):not(.clan-priv-page-content) table,
.card-content .clan-quests-content:not(.clan-official-page-content):not(.clan-priv-page-content) table,
.card-content .clan-rank-edit-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-recruit-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-skills-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-socPlayGroup-content:not(.clan-official-page-content):not(.clan-priv-page-content) table, 
.card-content .clan-treasury-content:not(.clan-official-page-content):not(.clan-priv-page-content) table {border-right: 1px solid #808080; border-left: 1px solid #808080; border-bottom: 1px solid #808080;}

.card-content .clan-bless-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-diplomacy-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-edit-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-edit-official-page-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-edit-priv-page-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-history-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-info-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-list-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-manage-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-members-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-official-page-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-other-members-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-other-recruit-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-priv-page-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-quests-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-rank-edit-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-recruit-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-skills-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-socPlayGroup-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td, 
.card-content .clan-treasury-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td {border-right: 1px solid #808080; border-left: 1px solid #808080; border-bottom: 1px solid #808080;}

.clan-other-recruit-content .green-box, .clan-recruit-content .green-box, .clan-treasury-content .green-box, .clan-manage-content .green-box, .clan-diplomacy-content .green-box, .clan-history-content .chose-show {border: 1px solid #808080}

</style>`).appendTo('head');
}
)();




  