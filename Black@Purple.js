(function() {
     $(`<style> 
        #GAME_CANVAS {image-rendering: auto !important;}
        .gargonem-otherlist-other-button{color: lime !important;}
        .gargonem-window {color: #000000 !important; background: #101010; border-radius: 0px !important; box-shadow: 0 0 0 1px #000, 0 0 0 2px #808080, 0 0 0 3px #000000, 2px 2px 3px 3px #000 !important;}

        .cll-alert-content{background: #101010 !important;color: #ffffff !important;}
        .cll-alert{border: 1px solid #808080 !important; box-shadow: 0 0 0 1px #808080 !important; background: #101010 !important; color: #ffffff !important;}
        .cll-alert button{background: #101010 !important; border: 1px solid #808080 !important;}
        .cll-alert button:hover {border: 1px solid lime !important;}
        .cll-alert button:focus {border: 1px solid #40ff40; !important;}
        .cll-timer{font-family: Arial, Helvetica, sans-serif !important;}
        .cll-timer-highlighted {background: #0a1f42 !important}
        .cll-timer-monster[style]{color: red !important;}

        .clan{color: #ffffff;}
        .border-window.mAlert .content .inner-content, .border-window.mAlert-mobile-layer .content .inner-content{color: #ffffff;}
        .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .one-mail-head .from b {color: #ffffff;}
        .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .mail-footer {color: #ffffff;}
        .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .msg-content{color: #ffffff;}
        .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper {
          border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/mail-item-box-border.png) 7 repeat;
          background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/mail-item-box-background.png);
        }

        .chat-channel-card-wrapper{border: 1px solid #808080 !important;}
        .new-chat-window .chat-message-wrapper, .chat-input-wrapper .magic-input-wrapper, .chat-input-wrapper .control-wrapper .menu-card, .chat-input-wrapper .control-wrapper .chat-config-wrapper {border: 1px solid #808080 !important;}
        .chat-input-wrapper {background: #101010 !important;}
        .new-chat-window {background: #101010 !important;}
        .chat-configure-window .chat-option-header {color: #FFFFFF !important; border: 1px solid #808080 !important; background: #101010 !important;}

        .linked-chat-item[data-item-type="t-norm"] {color: #9da1a7 !important;}
        .linked-chat-item[data-item-type="t-uniupg"] {color: #fffb00 !important;}
        .linked-chat-item[data-item-type="t-her"] {color: #38b8eb !important;}
        .linked-chat-item[data-item-type="t-upgraded"] {color: #ff59af !important;}
        .linked-chat-item[data-item-type="t-leg"] {color: #ff8400 !important;}

        .game-window-positioner .character_wrapper .stats-wrapper {background: #101010 !important; border: 1px solid #808080 !important; }
        .game-window-positioner .character_wrapper .stats-wrapper .header-title{background: #808080 !important; border-bottom: 1px solid #808080 !important;}
        .game-window-positioner .character_wrapper .stats-wrapper .interface-element-active-card-background-stretch{left: 0; right: 0;}


        .world-window__info, .info-box, .salvage__info, .enhance__info, .extraction__info{border: 1px solid #808080 !important; background: #202020 !important;}
        .hunting-statistics-table td, .hunting-statistics-table-header td {border: 1px solid #8c8c8c !important; }
        .players-online__item, .server-parameters__item .location-parameters__item{border: 1px solid #8c8c8c !important;}

        .auction-window .main-column-auction {background: #101010;}

        .interface-layer{border-image: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/oi7QxzB.png') 7 repeat !important;}
        .layer.interface-layer .main-column{background: #101010 !important;}
        .layer.interface-layer .main-column.right-column {background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/oTLO9A2.png') -251px 0px !important;}
        .layer.interface-layer .positioner.top .bg{background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/VW7joVD.png') 0 -61px repeat !important;}
        .layer.interface-layer .positioner.bottom .bg{background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/VW7joVD.png') 0 0 repeat !important;}
        .layer.interface-layer .positioner.bottom .bg-additional-widget-left {background: #101010;}
        .layer.interface-layer .positioner.bottom .bg-additional-widget-right {background: #101010;}
        .layer.interface-layer .main-column.right-column .border {background: transparent !important;}

        .battle-controller .graphics .header-graphic {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/battle-panel-header.png);}
        .battle-controller .graphics .middle-graphic {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/battle-panel-middle.png) repeat;}
        .battle-controller .skill-hider {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/skill-hider.png);}
        .battle-controller .graphics .bottom-graphic {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/skill_hot_skills.png) 0 -35px;}
        .additional-skill-panel {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/skill_hot_skills.png)}

        .game-window-positioner .inventory_wrapper .inventory-grid-bg {border: 1px solid #202020;}
        .interface-element-grid-border {outline: 1px solid #101010; box-shadow: 0 0 0 1px #404040;}
        .show-eq .table-wrapper .right-side .other-items-wrapper .other-items {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/eq.png) 0 -229px}

        .interface-element-one-item-slot-background-to-repeat {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/oneItemSlotToRepeat.png)}
        .interface-element-item-slot-grid-stretch {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/oneItemSlotToRepeat.png);}
        .shop-wrapper .shop-content .shop-items.scrollable .scroll-pane {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/oneItemSlotToRepeat.png);}
        
        .trade-window .window-background {background-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/trade-window.png)}

        .depo .find-and-manage-money-section .left-part .manage-money-wrapper .manage-money-wrapper-graphic, .depo .bottom-section .actions-bar-content .actions-bar-background {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/wood_bar.png) 1 1 23 1 fill}
        .depo .find-and-manage-money-section .right-part .money-info {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/info_money_bar.png) 1 1 23 11 fill}

        .ni-input input.default {border: 1px solid #8c8c8c; background: #101010; color: #ffffff; box-shadow: none; border-radius: 0px;}
        input.default {border: 1px solid #8c8c8c; background: #101010; color: #ffffff; box-shadow: none; border-radius: 0px;}

        .loot-window .items-wrapper .loot-item-wrapper{box-shadow: 0px 0px 0px 1px #808080; background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/buttony.png) no-repeat -231px -274px;}

        .tw-list-item{background: #101010 !important;}
        .border-window.transparent .border-image{box-shadow: 0 0 0 1px #000, 0 0 0 2px #808080, 0 0 0 3px #000000, 2px 2px 3px 3px #000; border-radius: 0px;}

        .loot-window .button-holder .button{background:linear-gradient(to top, #101010, #101010)}
        .loot-window .button-holder .button:before{box-shadow:inset 0 0 1px 1px #101010}
        .loot-window .button-holder .button.want{background:linear-gradient(to top,#101010,#101010)}
        .loot-window .button-holder .button.want:before{box-shadow:inset 0 0 1px 1px #101010}
        .loot-window .button-holder .button.not{background:linear-gradient(to top, #101010, #101010)}
        .loot-window .button-holder .button.not:before{box-shadow:inset 0 0 1px 1px #101010}
        .loot-window .button-holder .button.must{background:linear-gradient(to top, #101010, #101010)}
        .loot-window .items-wrapper .loot-item-wrapper .button-holder .button.green{border-color: #101010;}

        .popup-menu{border-radius: 1px;}
        //.popup-menu .menu-item {background: #202020; border: 1px solid #808080; border-radius: 1px;}
        //.popup-menu .menu-item:hover:not(.label):not(.disabled):not(.cooldown-disabled):not(.one-step-skill-menu) {border: 1px solid #808080; background-color: #808080;}
       // .popup-menu .menu-item.cooldown-disabled{background-color:rgba(255, 64, 64, 0.5); border: 1px solid #ff4040;}
        //.popup-menu .menu-item.one-step-skill-menu:not(.disabled) {border: 1px solid #40ff40; background-color: #202020}
        //.popup-menu .menu-item.one-step-skill-menu:not(.disabled):hover {border: 1px solid #40ff40; background-color: #808080}

        .button.mz-widget, .widget-button.mz-widget {background: linear-gradient(to top, #101010, #101010); box-shadow: inset 0 0 1px 1px #808080, inset 0 0 0 3px #101010;}
        .button.mz-widget:before, .widget-button.mz-widget:before {box-shadow: inset 0 0 0px 1px #808080, inset 0 0 0 3px #101010;}

        .button, .widget-button, .button.green, .widget-button.green {background-image: linear-gradient(to top, #101010, #101010)!important;box-shadow: inset 0 0 1px 1px #808080, inset 0 0 0 3px #101010!important;}
        .button.red, .widget-button.red  {background-image: linear-gradient(to top, #101010, #101010)!important;box-shadow: inset 0 0 1px 1px #ff4040, inset 0 0 0 3px #101010 !important;}

        .button.black,.button:not(.no-hover):not(.disabled):hover:not(.active),.widget-button.black,.widget-button:not(.no-hover):not(.disabled):hover:not(.active),.button.small.green.pressed {
            background-image: linear-gradient(to top, #101010,#101010)!important; box-shadow: inset 0 0 1px 1px #ff4040, inset 0 0 0 3px #101010 !important;
        }

        .button.black:before,.button:not(.no-hover):not(.disabled):hover:not(.active):before,.widget-button.black:before,.widget-button:not(.no-hover):not(.disabled):hover:not(.active):before {box-shadow: inset 0 0 1px 1px #101010 !important;}
        .button.black.active:before,.button:not(.no-hover):not(.disabled):hover:not(.active).active:before,.widget-button.black.active:before,.widget-button:not(.no-hover):not(.disabled):hover:not(.active).active:before {box-shadow: inset 0 0 1px 1px #101010 !important;}
        .button.green.window-is-open::before, .widget-button.green.window-is-open::before {background-color: #101010 !important;}
        .button.red::before, .widget-button.red::before{box-shadow: inset 0 0 1px 1px #101010 !important;}
        .button::before, .widget-button::before, .button.green::before, .widget-button.green::before{box-shadow: inset 0 0 1px 1px #101010;}
        .button, .widget-button {border-radius: 0px !important;}
        .button, .widget-button::after {border-radius: 0px !important;}
        
        .content .loot-window .items-wrapper .loot-item-wrapper .button-holder .button.green:not(.pressed){border-color: #101010; box-shadow:inset 0 0 1px 1px #40ff40 !important;}

        .border-window .header-label-positioner .header-label, .trade-window header .h_background .middle { background: 0 0; box-shadow: none;}

        .interface-element-bottom-bar-background, .interface-element-bottom-bar-background-stretch  {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_bar.png) 0 20 fill stretch}
        .interface-element-bottom-bar-background-stretch {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_bar.png) 0 20 fill stretch;}
        .matchmaking-summary .summary-content .wood-bar, .change-outfit .preview-outfit .outfit-header,.change-outfit .your-outfit .outfit-header {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_bar.png) 3 3 fill stretch;}
        .news-panel .news-content .section-header {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_bar.png);}

        .bonus-selector-wnd__bg, .bonus-reselect-wnd__bg, .matchmaking-summary .middle-graphics, .news-panel .news-content .crazy-bar, .change-outfit .crazy-bar, .battle-pass-window .section .scroll-wrapper .battle-pass-bg {
            background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_middle.png);}

        .promo-window .background-graphic, .premium-panel .premium-graphic, .border-window .wnd-dark-bg, .stamina-shop .background-graphic, .chests-window .brown-background, .conquer-stats .middle-graphics{
            border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_middle.png) 0 11 fill repeat;}

        .item-changer .scroll-wrapper .scroll-pane .middle-graphics {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_middle.png) 10 fill repeat;}

        .border-window .content {background: #101010; color: #ffffff;}

        .border-window {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/window-frame.png) 32 20 fill repeat;}

        .border-window .header-label-positioner .header-label .left-decor, .border-window .header-label-positioner .header-label .right-decor {background: 0 0;}

        .auction-window .cards-header-wrapper .header-background-graphic, .tabs-nav::before, .mails-window .cards-header-wrapper .header-background-graphic, .depo .bottom-section .cards-menu .cards-background, 
        .matchmaking-ranking .cards-header-wrapper .header-background-graphic, .achievement-panel .cards-header-wrapper .header-background-graphic, .cards-header-wrapper .header-background-graphic, .battle-pass-window .cards-header-wrapper .header-background-graphic
        {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/friend-header.png) 11 13 fill stretch}

        .additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane::after,.additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane::after {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 11 fill round;}
        .clan-list-find-panel {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 9 repeat}
        .showcase .card-content {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 9 repeat;}
        .mc-addon-window .content {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 10 repeat}
        .interface-element-vertical-wood {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) repeat;}

        .item-changer .scroll-wrapper .static-bar-table .table-header {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/table_header.png)}

        .console-wnd.border-window .content {border-image: none;}

        .auction-window .left-column-auction-and-main-column-auction{background: 0 0;}

        .interface-element-header-1-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/table_header.png) 0 20 fill stretch;}
        .interface-element-header-2-background-stretch {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/match-bar.png") 7 14 fill stretch;}

        .interface-element-header-1-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/table_header.png") 0 20 fill stretch;}
        .interface-element-header-2-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/match-bar.png") 7 14 fill stretch;}
        
        .interface-element-table-header-1-background {background: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/table_header.png");}
        
        .interface-element-middle-1-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png") 0 11 fill round; background: #101010; border-style: hidden;}
        .interface-element-middle-2-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png") 0 11 fill round; background: #101010; border-style: hidden;}
        .interface-element-middle-3-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png") 0 11 fill round; background: #101010;}
   
        .interface-element-middle-1-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 11 fill round; background: #101010; }
        .interface-element-middle-2-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 11 fill round; background: #101010; border-style: hidden;}
        .interface-element-middle-3-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 11 fill round; background: #101010; border-style: hidden;}

        .interface-element-bottom-bar-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_bar.png") 0 20 fill stretch;}
        .interface-element-bottom-bar-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_bar.png) 0 20 fill stretch;}

        .clan .left-column .clan-list-repeat {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/clan-list-repeat.png) repeat;}
        .clan .left-column .clan-info {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/buttony.png) no-repeat -14px -244px}
        .clan .left-column .clan-list-bottom{background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/buttony.png) no-repeat -228px -247px}
        .clan-treasury-content .scroll-wrapper .scroll-pane .right-part .outfit-content {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/buttony.png) no-repeat 0 -867px;}

        .stats-and-history .season-wnd .season-header {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/match-bar.png) 7 14 fill stretch;}

        .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .stone {border-image: url(../img/gui/recipes/one-reagent.png?v=1734604145496) 6 6 fill round stretch}
        .divide-list-group .card-graphic {border-image: url(../img/gui/recipes/one-reagent.png?v=1734604145496) 5 fill repeat stretch}

        .one-clan-skill .skill-icon-wrapper {background: url(../img/gui/skills/skill-box2.png?v=1734604145496);}
        .skill.chosen {background: url(../img/gui/skills/skill-box-active2.png?v=1734604145496)}
        .skill {background: url(../img/gui/skills/skill-box3.png?v=1734604145496)}

        .skills-window .right-column, .skills-window .right-column .scroll-wrapper .scroll-pane .empty, .addons-panel, .left-grouped-list-and-right-description-window .right-column .right-scroll .scroll-pane .reagents-label {color: #ffffff}
        .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .board-graphic {border-width: 0; border-image: none;}

        .layer.interface-layer .positioner.top .hud-container {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/sprite.png) -7px 0;}
        .bottom-panel {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/sprite.png) -6px -73px no-repeat}
        .bottom-panel.end-game {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/sprite.png) -6px -354px no-repeat}
        .bottom-panel .glass {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/sprite.png) -8px -199px;}
        .bottom-panel .exp-bar-wrapper .exp-progress .overlay {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/sprite.png) no-repeat -123px -184px;}
        .bottom-panel .exp-bar-wrapper .exp-progress.left .ribbon.end-game-ribbon,.bottom-panel .exp-bar-wrapper .exp-progress.right .ribbon.end-game-ribbon {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/sprite.png)}
        .bottom-panel .battle-bars-wrapper .battle-bar .background {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/sprite.png) -404px -199px}
        .bottom-panel .battle-bars-wrapper .battle-bar .overlay {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/sprite.png) -409px -186px;}

        .bottom-panel-pointer-bg {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/extInterface.png);}

        .shop-wrapper .shop-content.normal-shop-zl {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/normal-shop-gold.png) 0 -34px}
        .shop-wrapper .shop-content.normal-shop-sl {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/normal-shop-gold.png) 0 -34px}

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
