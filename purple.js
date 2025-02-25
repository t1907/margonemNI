(function() {
  $(`<style>
    .loader-image{background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/loader-image.png') !important;}

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
    
    .interface-layer {border-image: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oi7QxzB.png') 7 repeat !important;}
    .layer.interface-layer .main-column{background: #101010 !important;}
    .layer.interface-layer .main-column.right-column {background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oTLO9A2.png') -251px 0px !important;}
    .layer.interface-layer .positioner.top .bg{background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/VW7joVD.png') 0 -61px repeat !important;}
    .layer.interface-layer .positioner.bottom .bg{background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/VW7joVD.png') 0 0 repeat !important;}
    .layer.interface-layer .positioner.bottom .bg-additional-widget-left {background: #101010;}
    .layer.interface-layer .positioner.bottom .bg-additional-widget-right {background: #101010;}
    .layer.interface-layer .main-column.right-column .border {background: transparent !important;}

    .layer.interface-layer .positioner.top .hud-container {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png) -87px -109px}
    .layer.interface-layer .positioner.top .hud-container .map_ball {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png)}
    .bottom-panel-of-bottom-positioner .bottom-panel-graphic {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png) no-repeat -256px -870px;}
    .bottom-panel-of-bottom-positioner .exp-bar-wrapper .exp-progress .overlay {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png) no-repeat -450px -955px}
    .bottom-panel-of-bottom-positioner .exp-bar-wrapper .exp-progress.right .overlay {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png) no-repeat -450px -976px}
    .bottom-panel-pointer-bg .pointer-exp-graphic{background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png) no-repeat -704px -953px}
    .bottom-panel-pointer-bg .pointer-ttl-graphic{background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png) no-repeat -777px -953px}
    .bottom-panel-of-bottom-positioner .glass {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/ground/buttony.png) no-repeat -701px -1016px}
    
    .game-window-positioner .character_wrapper .stats-wrapper .header-title{background: #640064 !important; border-bottom: 1px solid #640064 !important;}
    .game-window-positioner .character_wrapper .stats-wrapper .interface-element-active-card-background-stretch{left: 0; right: 0;}
    .game-window-positioner .inventory_wrapper .inventory-grid-bg {border: 1px solid #101010;}
    
    .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .one-mail-head .from b {color: #f5f5f5;}
    .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .mail-footer {color: #f5f5f5;}
    .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper .msg-content{color: #f5f5f5;}
    .mails-window .mail-column .scroll-wrapper .scroll-pane .one-mail-wraper {background: #101010;}
    
    .chat-channel-card-wrapper{border: 1px solid #640064 !important;}
    .new-chat-window .chat-message-wrapper, .chat-input-wrapper .magic-input-wrapper, .chat-input-wrapper .control-wrapper .menu-card, .chat-input-wrapper .control-wrapper .chat-config-wrapper {border: 1px solid #640064 !important;}
    .chat-input-wrapper {background: #101010 !important;}
    .new-chat-window {background: #101010 !important;}
    .chat-configure-window .chat-option-header {color: #f5f5f5 !important; border: 1px solid #640064 !important; background: #101010 !important;}

    .interface-element-background-color-1 {background: #101010;}
    .interface-element-background-color-2 {background: #101010;}
    .interface-element-background-color-3 {background: #101010;}

    .border-window.mAlert .paper-background, .border-window.mAlert-mobile-layer .paper-background {background: #101010;}

    .clan, .addons-panel .left-column .main-header .addon-list-label, .skills-window .left-column .list-label-wrapper .list-label .label, .left-grouped-list-and-right-description-window .main-header .left-column-list-label{color: #f5f5f5;}
    .border-window.mAlert .content .inner-content, .border-window.mAlert-mobile-layer .content .inner-content{color: #f5f5f5;}
    .left-grouped-list-and-right-description-window{color: #f5f5f5;}

    .world-window__info, .info-box, .salvage__info, .enhance__info, .extraction__info{border: 1px solid #640064 !important; background: #101010 !important;}
    .hunting-statistics-table td, .hunting-statistics-table-header td {border: 1px solid #640064 !important; background: #101010;}
    .players-online__item, .server-parameters__item .location-parameters__item{border: 1px solid #640064 !important; background: #101010;}

    .auction-window .main-column-auction {background: #101010;}

    .search-wrapper {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/search.png) 5 9 23 34 fill}

    .interface-element-card-background, .interface-element-card-background-stretch, .tabs-nav .card, .auction-window input.default, .auction-off-item-panel input.default, 
    .matchmaking-ranking .cards-header-wrapper .cards-header .card, .cards-header-wrapper .cards-header .card, 
    .battle-pass-window .cards-header-wrapper .cards-header .card { background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) no-repeat; background-size: 100% 100%;}
    .depo .bottom-section .cards-menu .card::before {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button-active.png) 17 20 fill repeat}

    .tabs-nav .card.active, .matchmaking-ranking .cards-header-wrapper .cards-header .active, 
    .cards-header-wrapper .cards-header .card.active {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) no-repeat; background-size: 100% 100%;}
    .depo .bottom-section .cards-menu .card:not(.disabled).active::before {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) 17 20 fill repeat}
    .interface-element-active-card-background, .interface-element-active-card-background-stretch {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) 5 fill repeat stretch;}

    .drop-down-menu-section .type-header {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/header_left.png);}

    .additional-skill-panel {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/skill_hot_skills.png)}

    .battle-controller .graphics .battle-border {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/window-frame.png") 32 20 fill repeat; background-size: 100% 100%;}

    .additional-skill-panel {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/skill_hot_skills.png)}
    .additional-skill-panel .graphics .additional-skill-panel-border {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/window-frame.png")  32 20 fill repeat; background-size: 100% 100%;}
    .skills-window .right-column .scroll-wrapper .scroll-pane .empty, .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .requirements-wrapper{color: #f5f5f5;}

    .interface-element-grid-border {outline: 1px solid #101010; box-shadow: 0 0 0 1px #404040;}

    .interface-element-one-item-slot-background-to-repeat {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oneItemSlotToRepeat.png)}
    .interface-element-item-slot-grid-stretch {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oneItemSlotToRepeat.png);}
    .shop-wrapper .shop-content .shop-items.scrollable .scroll-pane {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/oneItemSlotToRepeat.png);}

    .interface-element-active-card-border-image{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/width-card-button.png) 5 fill repeat stretch}

    .ni-input input.default {border: 1px solid #640064; background: #101010; color: #f5f5f5; box-shadow: none; border-radius: 0px;}
    input.default {border: 1px solid #640064; background: #101010; color: #f5f5f5; box-shadow: none; border-radius: 0px;}

    .loot-window .items-wrapper .loot-item-wrapper{box-shadow: 0px 0px 0px 1px #640064; border: 1px solid #64006400;}
    .loot-window .items-wrapper .loot-item-wrapper .slot {border: 1px solid #640064;}
    .loot-window .items-wrapper .loot-item-wrapper .text-info {border-top: 1px solid #101010;border-bottom: 1px solid #101010;}

    .tw-list-item{background: #101010 !important;}
    .border-window.transparent .border-image, .dialogue-window .border-image{box-shadow: 0 0 0 1px #640064; border-radius: 0px;}

    .loot-window .button-holder .button{background:linear-gradient(to top, #101010, #101010)}
    .loot-window .button-holder .button:before{box-shadow:inset 0 0 1px 1px #101010}
    .loot-window .button-holder .button.want{background:linear-gradient(to top, #101010, #101010)}
    .loot-window .button-holder .button.want:before{box-shadow:inset 0 0 1px 1px #101010}
    .loot-window .button-holder .button.not{background:linear-gradient(to top, #101010, #101010)}
    .loot-window .button-holder .button.not:before{box-shadow:inset 0 0 1px 1px #101010}
    .loot-window .button-holder .button.must{background:linear-gradient(to top, #101010, #101010)}
    .loot-window .items-wrapper .loot-item-wrapper .button-holder .button.green{border-color: #101010;}

    .interface-element-one-item-slot {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) no-repeat -800px -79px;}
    .interface-element-one-item-slot-2 {border: 1px solid #640064;outline: 2px solid #101010; background: #101010; box-shadow: inset 2px 0 15px 1px #000;}
    .trade-window .content .hero-show-item, .trade-window .content .other-watch-item {background: #101010;}
    .trade-window .content .decision .dec-item, .trade-window .content .decision .hero_decision{color: #f5f5f5;}
    .interface-element-box-shadow-1 {box-shadow: inset 0 0 5px 0 #640064;} 

    .popup-menu, .mAlert-layer .scroll-wrapper.menu-wrapper {border-radius: 1px; background-color: #101010; box-shadow: 0 0 0 1px #640064;}
    .popup-menu .menu-item, .mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option {background: #101010; border: 1px solid #640064; border-radius: 1px;}
    .popup-menu .menu-item:hover:not(.label):not(.disabled):not(.cooldown-disabled):not(.one-step-skill-menu), .mAlert-layer .scroll-wrapper.menu-wrapper .wrapper .bck-wrapper .option:hover:not(.disabled) {background-color: #640064;}
    .popup-menu .menu-item.disabled{background-color: #640000;}
    .popup-menu .menu-item.cooldown-disabled{background-color: #640000;}
    .popup-menu .menu-item.one-step-skill-menu:not(.disabled) {background: #101010;}
    .popup-menu .menu-item.one-step-skill-menu:not(.disabled):hover {background-color: #640064;}

    .button.mz-widget, .widget-button.mz-widget {background: linear-gradient(to top, #101010, #101010); box-shadow: inset 0 0 1px 1px #640064, inset 0 0 0 3px #101010;}
    .button.mz-widget:before, .widget-button.mz-widget:before {box-shadow: inset 0 0 0px 1px #640064, inset 0 0 0 3px #101010;}

    .button, .widget-button, .button.green, .widget-button.green {background-image: linear-gradient(to top, #101010, #101010)!important;box-shadow: inset 0 0 1px 1px #640064, inset 0 0 0 3px #101010!important;}
    .button.red, .widget-button.red  {background-image: linear-gradient(to top, #101010, #101010)!important;box-shadow: inset 0 0 1px 1px #ff4040, inset 0 0 0 3px #101010 !important;}

    .button.black,.button:not(.no-hover):not(.disabled):hover:not(.active),.widget-button.black,.widget-button:not(.no-hover):not(.disabled):hover:not(.active),.button.small.green.pressed {
    background-image: linear-gradient(to top, #101010,#101010)!important; box-shadow: inset 0 0 1px 1px #ff4040, inset 0 0 0 3px #101010 !important;
    }

    .button.black:before,.button:not(.no-hover):not(.disabled):hover:not(.active):before,.widget-button.black:before,.widget-button:not(.no-hover):not(.disabled):hover:not(.active):before {box-shadow: inset 0 0 1px 1px #101010 !important;}
    .button.black.active:before,.button:not(.no-hover):not(.disabled):hover:not(.active).active:before,.widget-button.black.active:before,.widget-button:not(.no-hover):not(.disabled):hover:not(.active).active:before {box-shadow: inset 0 0 1px 1px #101010 !important;}
    .button.green.window-is-open::before, .widget-button.green.window-is-open::before {background-color: #101010 !important;}
    .button.red::before, .widget-button.red::before{box-shadow: inset 0 0 1px 1px #101010 !important;}
    .button.ground::before, .button.violet::before, .widget-button.ground::before, .widget-button.violet::before{box-shadow: inset 0 0 1px 1px #101010 !important;}
    .button.blink-violet::before, .widget-button.blink-violet::before{box-shadow: inset 0 0 1px 1px #101010 !important;}
    .button::before, .widget-button::before, .button.green::before, .widget-button.green::before{box-shadow: inset 0 0 1px 1px #101010;}
    .button, .widget-button {border-radius: 0px !important;}
    .button, .widget-button::after {border-radius: 0px !important; box-shadow: 0 2px 0 1px #101010}
    .widget-button .widget-blink{display: none !important;}

    .content .loot-window .items-wrapper .loot-item-wrapper .button-holder .button.green:not(.pressed){border-color: #101010; box-shadow:inset 0 0 1px 1px #40ff40 !important;}

    .border-window .header-label-positioner .header-label, .trade-window header .h_background .middle, .trade-window header .h_background .left, .trade-window header .h_background .right { background: 0 0; box-shadow: none;}

    .battle-pass-window .section .scroll-wrapper .battle-pass-bg, .bonus-selector-wnd__bg, .bonus-reselect-wnd__bg{background-size: contain;}

    .border-window {color: #f5f5f5;}
    .border-window .content {background: #101010;}

    .border-window, .interface-element-border-window-frame {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/window-frame.png) 32 20 fill repeat;}

    .border-window .header-label-positioner .header-label .left-decor, .border-window .header-label-positioner .header-label .right-decor {background: 0 0;}

    .tabs-nav::before, .mails-window .cards-header-wrapper .header-background-graphic, .depo .bottom-section .cards-menu .cards-background, .matchmaking-ranking .cards-header-wrapper .header-background-graphic, 
    .cards-header-wrapper .header-background-graphic, 
    .battle-pass-window .cards-header-wrapper .header-background-graphic{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/friend-header.png) 11 13 fill stretch;}

    .interface-element-vertical-wood {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) repeat;}

    .interface-element-green-box-background {background: #101010;}
    .interface-element-green-box-background-stretch {background: #101010;}

    .interface-element-wood-box-background {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/info-box-2.png); background-size: 100% 100%}

    .interface-element-header-1-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/table_header.png) 0 20 fill stretch;}
    .interface-element-header-2-background-stretch {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/match-bar.png") 7 14 fill stretch;}

    .interface-element-header-1-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/table_header.png") 0 20 fill stretch;}
    .interface-element-header-2-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/match-bar.png") 7 14 fill stretch;}

    .interface-element-table-header-1-background {background: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/table_header.png"); background-size: 100% 100%;}

    .interface-element-middle-1-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png") 0 11 fill round; background: #101010;}
    .interface-element-middle-2-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png") 0 11 fill round; background: #101010;}
    .interface-element-middle-3-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png") 0 11 fill round; background: #101010;}
    .interface-element-middle-4-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png") 0 11 fill round; background: #101010;}

    .interface-element-middle-1-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round; background: #101010;}
    .interface-element-middle-2-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round; background: #101010;}
    .interface-element-middle-3-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/middle_graphics.png) 0 11 fill round; background: #101010;}

    .interface-element-bottom-bar-background {border-image: url("https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/quest_bar.png") 0 20 fill stretch;}
    .interface-element-bottom-bar-background-stretch{border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/quest_bar.png) 0 20 fill stretch;}

    .clan-treasury-content .scroll-wrapper .scroll-pane .right-part .outfit-content {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/buttony.png) no-repeat 0 -867px;}

    .shop-wrapper .shop-background.normal-shop-zl .canopy {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/normal-shop-gold.png) 0 -34px}
    .shop-wrapper .shop-background.normal-shop-sl .canopy {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/purple/normal-shop-gold.png) 0 -34px}
    .shop-wrapper .shop-background.pet-shop-zl .canopy{}
    .shop-wrapper .shop-background.pet-shop-sl .canopy{}
    .shop-wrapper .shop-background .paper-1,.shop-wrapper .shop-background .paper-2 {background: #101010; box-shadow: inset 0 0 1px 0 #640064;}

    .card-content .clan-list-find-panel input.default,.card-content .green-box input.default {border: 1px solid #640064;}

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
    .card-content .clan-treasury-content:not(.clan-official-page-content):not(.clan-priv-page-content) table {border-right: 1px solid #640064; border-left: 1px solid #640064; border-bottom: 1px solid #640064;}

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
    .card-content .clan-treasury-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td {border-right: 1px solid #640064; border-left: 1px solid #640064; border-bottom: 1px solid #640064;}

    .clan-other-recruit-content .green-box, .clan-recruit-content .green-box, .clan-treasury-content .green-box, .clan-manage-content .green-box, .clan-diplomacy-content .green-box, .clan-history-content .chose-show {border: 1px solid #640064}

    .tip-wrapper {box-shadow: 0px 0px 1px 1px #640064; color: #f5f5f5;}

    .tip-wrapper.normal-tip .damage,.tip-wrapper.sticky-tip .damage {color: #00ff00;}

    .tip-wrapper .content .info-wrapper .nick {background: #303030; border: 1px solid #640064;}

    .tip-wrapper .content .info-wrapper .m {color: #0000ff}
    .tip-wrapper .content .info-wrapper .e {color: #ffce00}
    .tip-wrapper .warrior-mana {color: #00abff}
    .tip-wrapper .warrior-energy {color: #ffc800;}

    .linked-chat-item[data-item-type="t-norm"] {color: #f5f5f5 !important;}
    .linked-chat-item[data-item-type="t-uniupg"] {color: #ffc800 !important;}
    .linked-chat-item[data-item-type="t-her"] {color: #00c8ff !important;}
    .linked-chat-item[data-item-type="t-upgraded"] {color: #c800c8 !important;}
    .linked-chat-item[data-item-type="t-leg"] {color: #ffc800 !important;}

    .tip-wrapper[data-type=t_item] .item-head .common,.tip-wrapper[data-type=t_item] .item-tip-section .common {color: #f5f5f5;}
    .tip-wrapper[data-type=t_item] .item-head .upgraded,.tip-wrapper[data-type=t_item] .item-tip-section .upgraded {color: #ffc800;}
    .tip-wrapper[data-type=t_item] .item-head .unique,.tip-wrapper[data-type=t_item] .item-tip-section .unique {color: #ffc800;}
    .tip-wrapper[data-type=t_item] .item-head .heroic,.tip-wrapper[data-type=t_item] .item-tip-section .heroic {color: #00c8ff;}
    .tip-wrapper[data-type=t_item] .item-head .legendary,.tip-wrapper[data-type=t_item] .item-tip-section .legendary {color: #ff00c8;}
    .tip-wrapper[data-type=t_item] .item-head .artefact,.tip-wrapper[data-type=t_item] .item-tip-section .artefact {color: #ff00c8;}
    .tip-wrapper[data-type=t_item] .item-head .elite,.tip-wrapper[data-type=t_item] .item-tip-section .elite {color: #ffc800;}

    .tip-wrapper[data-type=t_item] .item-head {background: #101010; border: 1px solid #640064;}
    .tip-wrapper[data-type=t_item] .item-head .item-builds,.tip-wrapper[data-type=t_item] .item-head .item-type {color: #f5f5f5;}
    .tip-wrapper[data-type=t_item] .item-tip-section {border-bottom: 1px solid #64006400;}
    .tip-wrapper[data-type=t_item] .item-tip-section.s-5 {color: #ff00c8; text-align: center;}
    .tip-wrapper[data-type=t_item] .item-tip-section.s-7 {color: whitesmoke;}
    .tip-wrapper[data-type=t_item] i.looter {color: #00ff00; text-align: center;}

    .tip-wrapper[data-item-type=heroic],.tip-wrapper[data-item-type=t-her] {box-shadow: 0px 0px 3px 1px #00c8ff;}

    .tip-wrapper[data-item-type=t-upgraded],.tip-wrapper[data-item-type=upgraded] {box-shadow: 0px 0px 3px 1px #ffc800;}

    .tip-wrapper[data-item-type=elite],.tip-wrapper[data-item-type=t-elite],.tip-wrapper[data-item-type=t-uniupg],.tip-wrapper[data-item-type=unique] {box-shadow:  0px 0px 3px 1px #ffc800;}

    .tip-wrapper[data-item-type=legendary],.tip-wrapper[data-item-type=t-leg] {box-shadow: 0px 0px 3px 1px #ff00c8;}

    .tip-wrapper[data-item-type=artefact],.tip-wrapper[data-item-type=t-art] {box-shadow: 0px 0px 3px 1px #ff00c8;}

    .tip-wrapper[data-item-type=normal],.tip-wrapper[data-item-type=t-norm] {box-shadow: 0px 0px 3px 1px #640064;}
    </style>`).appendTo('head');
  }
)();