(function() {
  $(`<style>
#GAME_CANVAS{image-rendering: auto !important;}

.interface-element-border-window-frame, .battle-controller .graphics .battle-border, .additional-skill-panel .graphics .additional-skill-panel-border{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/window-frame.png) 32 20 fill repeat;
  background-size:100% 100%
}
.border-window{
  color: #444444; 
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/window-frame.png) 32 20 fill repeat;
  background-size:100% 100%
}

.interface-element-grid-border{outline:1px solid #1e1d1b;outline-offset:1px;box-shadow:0 0 0 1px #534f50,0 0 0 2px #333131,0 0 0 3px #4e4a4b}
.interface-element-border-window-header-middle{
  box-shadow:inset 0 1px 0 0 #2e3232,inset 0 2px 0 0 #97a1a5,inset 0 3px 0 0 #697072,inset 0 4px 0 0 #291b13,inset 0 -2px 0 0 #0c0806,inset 0 -3px 0 0 #434849,inset 0 -4px 0 0 #aea1a1;
  background:#2e3232
}

.interface-element-one-item-slot-background-to-repeat, .interface-element-item-slot-grid-stretch{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oneItemSlotToRepeat.png)}

.interface-element-vertical-wood{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) repeat}

.interface-element-active-card-border-image{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) 5 fill repeat stretch}
.interface-element-active-card-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%}
.interface-element-active-card-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) 5 fill repeat stretch}
.interface-element-card-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%}
.interface-element-card-background-stretch{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%}

.interface-element-wood-box-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/info-box-2.png);background-size:100% 100%}

.interface-element-green-box-background{background:linear-gradient(to right,#0d140b 0,#192615 7%,#1e4116 30%,#1e4116 70%,#192615 93%,#0d140b 100%)}
.interface-element-green-box-background-stretch{background:linear-gradient(to right,#0d140b 0,#192615 7%,#1e4116 30%,#1e4116 70%,#192615 93%,#0d140b 100%)}

.interface-element-background-color-1{background:#1d1210}
.interface-element-background-color-2{background:#f1dca7}
.interface-element-background-color-3{background:#282929}
.interface-element-background-color-4{background:rgba(0,0,0,.6)}

.interface-element-box-shadow-1{box-shadow:inset 0 0 5px 0 #000}
.interface-element-box-shadow-2{box-shadow:inset 2px 0 15px 1px #000}

.interface-element-one-item-slot-2{border:1px solid #3f2e23;outline:2px solid #2c2017;background:#281d15;box-shadow:inset 2px 0 15px 1px #000}

.interface-element-middle-1-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#1d1210}
.interface-element-middle-2-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#f1dca7}
.interface-element-middle-3-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#282929}
.interface-element-middle-4-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:rgba(0,0,0,.6)}

.interface-element-bottom-bar-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/quests/quest_bar.png) 0 20 fill stretch}

.interface-element-header-1-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/table_header.png) 0 20 fill stretch}
.interface-element-header-2-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/match-bar.png) 7 14 fill stretch}

.interface-element-table-td-3-border{border:1px solid #615a59}
.interface-element-table-header-3-border{border:1px solid #8c8c8c}
.interface-element-table-header-3-background{background:#5a5a5a}
.interface-element-table-3{color:#fff}
.interface-element-table-3 .table-header-tr td{border:1px solid #8c8c8c;background:#5a5a5a}
.interface-element-table-3 tr:nth-of-type(2n+1){background:rgba(0,0,0,.4)}
.interface-element-table-3 td{border:1px solid #615a59}
.interface-element-table-header-1-background{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/table_header.png);background-size:100% 100%}

.interface-element-middle-1-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#1d1210;}
.interface-element-line-1-background{background:linear-gradient(to right,#000 0,#898989 30%,#949494 50%,#898989 70%,#000 100%)}
.interface-element-middle-2-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#f1dca7}
.interface-element-middle-3-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#282929}

.interface-element-bottom-bar-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/quests/quest_bar.png) 0 20 fill stretch}

.interface-element-header-1-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/table_header.png) 0 20 fill stretch}
.interface-element-header-2-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/match-bar.png) 7 14 fill stretch}
.interface-element-header-1{color:#cfc8a2}

.shop-wrapper .shop-content .shop-items.scrollable .scroll-pane{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oneItemSlotToRepeat.png)}

.additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane::after,
.additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane::after{
  border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round;background:#1d1210}

.tabs-nav .card.active{pointer-events:none;background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%;color:#fff}

.drop-down-menu-section .content-wrapper .item-category-wrapper .drop-down-menu-item.selected{color:#fff;background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%}

.depo .bottom-section .cards-menu .card:not(.disabled).active::before{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) 17 20 fill repeat}
.matchmaking-ranking .ranking-tabs .cards-header .active{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%;color:#fff}
.cards-header-wrapper .cards-header .card.active{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat;background-size:100% 100%;color:#fff}

.tabs-nav .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#707172}
.drop-down-menu-section .content-wrapper .item-category-wrapper .drop-down-menu-item{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%}
.auction-off-item-panel input.default,.auction-window input.default{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;border:1px solid #615a59;color:#fff}
.depo .bottom-section .cards-menu .card::before{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) 17 20 fill repeat}
.matchmaking-ranking .ranking-tabs .cards-header .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#707172}
.cards-header-wrapper .cards-header .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#707172}
.battle-pass-window .cards-header-wrapper .cards-header .card{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat;background-size:100% 100%;color:#707172}

.search-wrapper{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/search.png) 5 9 23 34 fill}

.tabs-nav::before{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.mails-window .cards-header-wrapper .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.depo .bottom-section .cards-menu .cards-background{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.matchmaking-ranking .ranking-tabs .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.cards-header-wrapper .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}
.battle-pass-window .cards-header-wrapper .header-background-graphic{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch}

.layer.interface-layer .main-column.right-column{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/chat-powtarzalny-podklad.png) -251px 0}
.layer.interface-layer .main-column.right-column .border{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/chat-powtarzalny-podklad.png) -251px 0}
.layer.interface-layer .main-column .extended-stats .border{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/chat-powtarzalny-podklad.png) -251px 0}
.layer.interface-layer .positioner.top .bg{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/belka-gora-dol.png) 0 -61px repeat}
.layer.interface-layer .positioner.bottom .bg{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/belka-gora-dol.png) 0 0 repeat}







  
</style>`).appendTo('head');
}
)();




  