(function() {
  $(`<style>
#GAME_CANVAS {image-rendering: auto !important;}

    .gargonem-otherlist-other-button{color: lime !important;}
    .gargonem-window {color: #000000 !important; background: #101010; border-radius: 0px !important; box-shadow: 0 0 0 1px #000, 0 0 0 2px #640064, 0 0 0 3px #000000, 2px 2px 3px 3px #000 !important;}
    
    .cll-alert-content{background: #101010 !important;color: #f5f5f5 !important;}
    .cll-alert{border: 1px solid #640064 !important; box-shadow: 0 0 0 1px #640064 !important; background: #101010 !important; color: #f5f5f5 !important;}
    .cll-alert button{background: #101010 !important; border: 1px solid #640064 !important; box-shadow: 0 0 0 1px #101010 !important;}
    .cll-alert button:hover {border: 1px solid lime !important;}
    .cll-alert button:focus {border: 1px solid #40ff40; !important;}
    .cll-timer{font-family: Arial, Helvetica, sans-serif !important;}
    .cll-timer-highlighted {background: #0a1f42 !important}
    .cll-timer-monster[style]{color: red !important;}

.interface-element-border-window-frame, .battle-controller .graphics .battle-border, .additional-skill-panel .graphics .additional-skill-panel-border, .border-window{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/window-frame.png) 32 20 fill repeat;
  background-size:100% 100%
}
.border-window{
  color: #444444;
}

.interface-element-grid-border{outline:none;box-shadow:0 0 0 1px #640064}
.interface-element-border-window-header-middle{box-shadow:inset 0 1px 0 0 #640064;background:#202020}

.interface-element-one-item-slot-background-to-repeat, .interface-element-item-slot-grid-stretch{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oneItemSlotToRepeat.png)}

.interface-element-vertical-wood{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) repeat}

.interface-element-active-card-border-image{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) 5 fill repeat stretch}
.interface-element-active-card-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%}
.interface-element-active-card-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) 5 fill repeat stretch}
.interface-element-card-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%}
.interface-element-card-background-stretch{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%}

.interface-element-wood-box-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/info-box-2.png);background-size:100% 100%}

.interface-element-green-box-background{background:#202020}
.interface-element-green-box-background-stretch{background:#202020}

.interface-element-background-color-1, .interface-element-background-color-2, .interface-element-background-color-3, .interface-element-background-color-4{background:#202020}

.interface-element-box-shadow-1{box-shadow:inset 0 0 5px 0 #000}
.interface-element-box-shadow-2{box-shadow:inset 2px 0 15px 1px #000}

.interface-element-one-item-slot-2{border:1px solid #640064;outline:none;background:#202020;box-shadow:inset 2px 0 15px 1px #000}

.interface-element-middle-1-background, .interface-element-middle-2-background, .interface-element-middle-3-background, .interface-element-middle-4-background{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#202020
}

.interface-element-bottom-bar-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/quests/quest_bar.png) 0 20 fill stretch}

.interface-element-header-1-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/table_header.png) 0 20 fill stretch}
.interface-element-header-2-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/match-bar.png) 7 14 fill stretch}

.interface-element-table-td-3-border{border:1px solid #640064}
.interface-element-table-header-3-border{border:1px solid #640064}
.interface-element-table-header-3-background{background:#202020}
.interface-element-table-3{color:#f0f0f0}
.interface-element-table-3 .table-header-tr td{border:1px solid #640064;background:#202020}
.interface-element-table-3 tr:nth-of-type(2n+1){background: #202020;}
.interface-element-table-3 td{border:1px solid #640064}
.interface-element-table-header-1-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/table_header.png);background-size:100% 100%}

.interface-element-middle-1-background-stretch, .interface-element-middle-2-background-stretch, .interface-element-middle-3-background-stretch{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#202020
}
.interface-element-line-1-background{background:#202020}

.interface-element-bottom-bar-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/quests/quest_bar.png) 0 20 fill stretch}

.interface-element-header-1-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/table_header.png) 0 20 fill stretch}
.interface-element-header-2-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/match-bar.png) 7 14 fill stretch}
.interface-element-header-1{color:#f0f0f0}

.shop-wrapper .shop-content .shop-items.scrollable .scroll-pane{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oneItemSlotToRepeat.png)}

.additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane::after,
.additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane::after{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#202020}

.tabs-nav .card.active{pointer-events:none;background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%;color:#f0f0f0}

.drop-down-menu-section .content-wrapper .item-category-wrapper .drop-down-menu-item.selected{
  color:#f0f0f0;background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%
}

.depo .bottom-section .cards-menu .card:not(.disabled).active::before{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) 17 20 fill repeat}
.matchmaking-ranking .ranking-tabs .cards-header .active{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%;color:#f0f0f0}
.cards-header-wrapper .cards-header .card.active{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%;color:#f0f0f0}

.tabs-nav .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#f0f0f0}
.drop-down-menu-section .content-wrapper .item-category-wrapper .drop-down-menu-item{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%}
.auction-off-item-panel input.default,.auction-window input.default{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;border:1px solid #640064;color:#f0f0f0}
.depo .bottom-section .cards-menu .card::before{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) 17 20 fill repeat}
.matchmaking-ranking .ranking-tabs .cards-header .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#f0f0f0}
.cards-header-wrapper .cards-header .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#f0f0f0}
.battle-pass-window .cards-header-wrapper .cards-header .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#f0f0f0}

.search-wrapper{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/search.png) 5 9 23 34 fill}

.tabs-nav::before{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.mails-window .cards-header-wrapper .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.depo .bottom-section .cards-menu .cards-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.matchmaking-ranking .ranking-tabs .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.cards-header-wrapper .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.battle-pass-window .cards-header-wrapper .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}

.interface-layer {border: 7px solid transparent;border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oi7QxzB.png) 7 repeat !important;box-sizing: border-box;}
.layer.interface-layer .main-column.right-column{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oTLO9A2.png) -251px 0}
.layer.interface-layer .main-column.right-column .border{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oTLO9A2.png) -251px 0}
.layer.interface-layer .main-column .extended-stats .border{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oTLO9A2.png) -251px 0}
.layer.interface-layer .positioner.top .bg{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/VW7joVD.png) 0 -61px repeat}
.layer.interface-layer .positioner.bottom .bg{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/VW7joVD.png) 0 0 repeat}

.layer.interface-layer .positioner.top .hud-container {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) -87px -109px}
.layer.interface-layer .positioner.top .hud-container .map_ball {background: url(https://i.imgur.com/y8yj4E7.png);}
.bottom-panel-of-bottom-positioner .bottom-panel-graphic {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) no-repeat -256px -870px;}
.bottom-panel-of-bottom-positioner .exp-bar-wrapper .exp-progress .overlay {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) no-repeat -450px -955px}
.bottom-panel-of-bottom-positioner .exp-bar-wrapper .exp-progress.right .overlay {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) no-repeat -450px -976px}
.bottom-panel-pointer-bg .pointer-exp-graphic{background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) no-repeat -704px -953px}
.bottom-panel-pointer-bg .pointer-ttl-graphic{background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) no-repeat -777px -953px}
.bottom-panel-of-bottom-positioner .glass {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) no-repeat -701px -1016px}
.clan-treasury-content .scroll-wrapper .scroll-pane .right-part .outfit-content {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) no-repeat 0 -867px;}

.border-window .header-label-positioner .header-label .left-decor,.border-window .header-label-positioner .header-label .right-decor{background: none !important;}
.border-window .header-label-positioner .header-label .text{color:#640064;line-height:28px;text-align:center}

.additional-skill-panel{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/skill_hot_skills.png)}










  

</style>`).appendTo('head');
}
)();




  