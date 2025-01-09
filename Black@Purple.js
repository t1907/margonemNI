(function() {
    if (getCookie('interface')==='ni') {
        $(`<style> 
            #GAME_CANVAS {image-rendering: auto !important;}

            .gargonem-otherlist-other-button{color: lime !important;}
            .gargonem-window {color: #000000 !important; background: #101010; border-radius: 0px !important; box-shadow: 0 0 0 1px #000, 0 0 0 2px #8005b4, 0 0 0 3px #000000, 2px 2px 3px 3px #000 !important;}

            .cll-alert-content{background: #101010 !important;color: #ffffff !important;}
            .cll-alert{border: 1px solid #8005b4 !important; box-shadow: 0 0 0 1px #8005b4 !important; background: #101010 !important; color: #ffffff !important;}
            .cll-alert button{background: #101010 !important; border: 1px solid #8005b4 !important;}
            .cll-alert button:hover {border: 1px solid lime !important;}
            .cll-alert button:focus {border: 1px solid #57e106 !important;}
            .cll-timer{font-family: Arial, Helvetica, sans-serif !important;}
            .cll-timer-monster {color: #57e106 !important;}
            .cll-timer-highlighted {background: #0a1f42 !important}
            .cll-timer-monster[style]{color: red !important;}

            .clan{color: #ffffff;}

            .battle-controller .graphics .header-graphic{background: #101010;}
            .battle-controller .graphics .middle-graphic{background: #101010;}
            .battle-controller .graphics .bottom-graphic{background: #101010;}
            .battle-controller .skill-hider{background: #101010;}

            .battle-controller .battle-content{border: 1px solid #8005b4 !important;}
            .battle-controller .battle-content .left-column{border: 1px solid #8005b4 !important;}
            /*.battle-controller .battle-content .right-column{display:none !important;}*/
            .battle-controller .skill-usable-add-slots .skill-usable-slot{display: none;}

            .chat-channel-card-wrapper{border: 1px solid #8005b4 !important;}
            .new-chat-window .chat-message-wrapper, .chat-input-wrapper .magic-input-wrapper, .chat-input-wrapper .control-wrapper .menu-card, .chat-input-wrapper .control-wrapper .chat-config-wrapper {border: 1px solid #8005b4 !important;}
            .chat-input-wrapper {background: #101010 !important;}
            .new-chat-window .menu-card .chat-channel-card-wrapper{border: #1f1f1f 1px solid !important;}
            .new-chat-window {background: #101010 !important;}
            .chat-configure-window .chat-option-header {color: #FFFFFF !important; border: 1px solid #8005b4 !important; background: #101010 !important;}

            .linked-chat-item[data-item-type="t-norm"] {color: #9da1a7 !important;}
            .linked-chat-item[data-item-type="t-uniupg"] {color: #fffb00 !important;}
            .linked-chat-item[data-item-type="t-her"] {color: #38b8eb !important;}
            .linked-chat-item[data-item-type="t-upgraded"] {color: #ff59af !important;}
            .linked-chat-item[data-item-type="t-leg"] {color: #ff8400 !important;}

            .game-window-positioner .character_wrapper .stats-wrapper {background: #101010 !important; border: 1px solid #8005b4 !important; }
            .game-window-positioner .character_wrapper .stats-wrapper .header-title{background: #8005b4 !important; border-bottom: 1px solid #8005b4 !important;}

            .world-window__info, .info-box, .salvage__info, .enhance__info, .extraction__info{border: 1px solid #8005b4 !important; background: #8005b4 !important;}
            .hunting-statistics-table td, .hunting-statistics-table-header td {border: 1px solid #8005b4 !important; }
            .players-online__item, .server-parameters__item .location-parameters__item{border: 1px solid #8005b4 !important;}

            .interface-layer{border-image: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/oi7QxzB.png') 7 repeat !important;}
            .layer.interface-layer .main-column{background: #101010 !important;}
            .main-column.right-column {background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/oTLO9A2.png') -251px 0px !important;}
            .positioner.top .bg{background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/VW7joVD.png') 0 -61px repeat !important;}
            .positioner.bottom .bg{background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/VW7joVD.png') 0 0 repeat !important;}
            .border {background: transparent !important;}

            .ni-input input.default {border: 1px solid #8005b4}

            .loot-window .bottom-wrapper .bottom-graphic{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/belka-wieksza.png) !important;}
            .loot-window .items-wrapper .loot-item-wrapper{box-shadow: 0px 0px 0px 1px #8005b4; background: #101010;}

            .tw-list-item{background: #101010 !important;}
            .border-window.transparent .border-image{box-shadow: 0 0 0 1px #000, 0 0 0 2px #8005b4, 0 0 0 3px #000000, 2px 2px 3px 3px #000 !important; border-radius: 0px;}

            .loot-window .button-holder .button{background:linear-gradient(to top,#101010,#101010)}
            .loot-window .button-holder .button:before{box-shadow:inset 0 0 1px 1px #101010}
            .loot-window .button-holder .button.want{background:linear-gradient(to top,#101010,#101010)}
            .loot-window .button-holder .button.want:before{box-shadow:inset 0 0 1px 1px #101010}
            .loot-window .button-holder .button.not{background:linear-gradient(to top,#101010,#101010)}
            .loot-window .button-holder .button.not:before{box-shadow:inset 0 0 1px 1px #101010}
            .loot-window .button-holder .button.must{background:linear-gradient(to top,#101010,#101010)}

            .button.mz-widget, .widget-button.mz-widget {background: linear-gradient(to top, #101010, #252525); box-shadow: inset 0 0 1px 1px #414141, inset 0 0 0 3px #0c0d0d;}

            .button.mz-widget:before, .widget-button.mz-widget:before {box-shadow: inset 0 0 0px 1px #706854, inset 0 0 0 3px #25261d;}

            .button.green, .widget-button.green {background-image: linear-gradient(to top, #101010, #101010)!important;box-shadow: inset 0 0 1px 1px #8005b4, inset 0 0 0 3px #101010!important;}

            .button.red, .widget-button.red  {background-image: linear-gradient(to top, #101010, #101010)!important;box-shadow: inset 0 0 1px 1px #cf0a2c, inset 0 0 0 3px #101010 !important;}

            .button.black,.button:not(.no-hover):not(.disabled):hover:not(.active),.widget-button.black,.widget-button:not(.no-hover):not(.disabled):hover:not(.active),.button.small.green.pressed {
                background-image: linear-gradient(to top, #101010,#101010)!important;
                box-shadow: inset 0 0 1px 1px #cf0a2c,inset 0 0 0 3px #101010 !important;
            }

            .button.black:before,.button:not(.no-hover):not(.disabled):hover:not(.active):before,.widget-button.black:before,.widget-button:not(.no-hover):not(.disabled):hover:not(.active):before {box-shadow: inset 0 0 1px 1px #101010 !important;}
            .button.black.active:before,.button:not(.no-hover):not(.disabled):hover:not(.active).active:before,.widget-button.black.active:before,.widget-button:not(.no-hover):not(.disabled):hover:not(.active).active:before {box-shadow: inset 0 0 1px 1px #101010 !important;}
            .button.green.window-is-open::before, .widget-button.green.window-is-open::before {background-color: #101010 !important;}
            .button.red::before, .widget-button.red::before{box-shadow: inset 0 0 1px 1px #101010 !important;}
            .button.green::before, .widget-button.green::before{box-shadow: inset 0 0 1px 1px #101010 !important;}
            .button, .widget-button {border-radius: 0px !important;}
            .button, .widget-button::after {border-radius: 0px !important;}

            .content .loot-window .items-wrapper .loot-item-wrapper .button-holder .button.green:not(.pressed){border-color: #101010; box-shadow:inset 0 0 1px 1px #41c400 !important;}
            .mark-message-span.click-able{color: lime !important;}

            .addons-panel .main-header, .left-grouped-list-and-right-description-window .main-header {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/1.png)}

            .auction-window .left-column-auction-and-main-column-auction {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/2.png) -2px 0}
            .left-grouped-list-and-right-description-window .left-column .middle-left-column-graphics, .addons-panel .left-column .middle-left-column-graphics {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/2.png)}

            .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane, .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane,
            .additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-global-content .scroll-wrapper .scroll-pane::after,
            .additional-bar-br .layer.interface-layer .mini-map .mini-map-content .mini-map-local-content .scroll-wrapper .scroll-pane::after {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/2.png) 0 30 fill repeat}

            .addons-panel .right-column .middle-right-column-graphics, .left-grouped-list-and-right-description-window .right-column .middle-right-column-graphics {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/3.png)}

            .addons-panel .left-column .bottom-left-column-graphics, .left-grouped-list-and-right-description-window .left-column .bottom-left-column-graphics {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/4.png)}

            .promo-window .promo-bottom-panel, .premium-panel .premium-bottom-panel, .border-window .bottom-bar, .addons-panel .bottom-recipes-panel .bottom-panel-graphics, .mails-window .bottom-mail-panel .bottom-panel-graphics,
            .recovery-item .recover-bottom-panel, .stamina-shop .footer .bottom-panel-graphics, .gold-shop .footer .bottom-panel-graphics, .divide-edit-panel .bottom-bar,
            .left-grouped-list-and-right-description-window .bottom-row-panel .bottom-panel-graphics, .chests-window .chests-bottom-panel, .matchmaking-summary .bottom-panel-graphics, .matchmaking-panel .bottom-panel-graphics, .achievement-panel .bottom-panel-graphics, .item-changer .filter-wrapper,
            .battle-pass-window .bottom-row-panel .bottom-panel-graphics  {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/5.png)}

            .auction-window .bottom-part .bottom-panel-graphics, .divide-panel .bottom-part .bottom-panel-graphics, .console-window .console-bottom-panel-wrapper .console-bottom-panel,
            .skills-window .bottom-part .bottom-panel-graphics, .item-changer .bottom-item-changer-panel .bottom-panel-graphics,
            .change-outfit .bottom-change-outfit-panel .bottom-panel-graphics {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/5.png) 0 59 fill stretch;}

            .addons-panel .right-column .paper-graphics {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/7.png) 63 27 27 fill round;}
            .recovery-item .scroll-wrapper .scroll-pane .paper-graphics {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/7.png) 63 27 27 fill repeat}
            .item-changer .scroll-wrapper .scroll-pane .paper-graphics {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/7.png) 63 27 27 fill repeat;}
            .left-grouped-list-and-right-description-window .right-column .paper-graphics {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/7.png) 63 27 27 fill round;}

            .border-window .header-label-positioner .header-label, .trade-window header .h_background .middle { background: 0 0;}

            .settings-window .bottom-bar, .friend-enemy-list .amound-wrapper, .friend-enemy-list .bottom-friend-panel, .news-panel .news-content .section-header {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_bar.png);}
            .matchmaking-summary .summary-content .wood-bar, .change-outfit .preview-outfit .outfit-header, .change-outfit .your-outfit .outfit-header {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_bar.png) 3 3 fill stretch;}

            .border-window-background {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_middle.png) 0 11 fill repeat;}
            .bonus-selector-wnd__bg, .bonus-reselect-wnd__bg, .promo-window .background-graphic, .premium-panel .premium-graphic , .border-window .wnd-dark-bg,
            .border-window-background, .recovery-item .scroll-wrapper .scroll-pane .paper-graphics, .stamina-shop .background-graphic, .matchmaking-summary .middle-graphics,
            .stats-and-history .season-wnd .middle-wood, .news-panel .news-content .crazy-bar, .change-outfit .crazy-bar, .battle-pass-window .section .scroll-wrapper .battle-pass-bg {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_middle.png);}

            .skills-window .left-column .middle-graphic, .divide-edit-panel .scroll-wrapper .scroll-pane .middle-graphic, .divide-and-color-edit .middle-graphic, .chests-window .brown-background, .item-changer .scroll-wrapper .scroll-pane .middle-graphics,
            .conquer-stats .middle-graphics {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/quest_middle.png) 0 11 fill repeat;}

            .border-window .content {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/content-redleather.jpg);}

            .border-window {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/window-frame.png) 32 20 fill repeat;}

            .border-window .header-label-positioner .header-label .left-decor, .border-window .header-label-positioner .header-label .right-decor {background: 0 0;}

            .depo .bottom-section .cards-menu .cards-background, .matchmaking-ranking .cards-header-wrapper .header-background-graphic, .auction-window .cards-header-wrapper .header-background-graphic, .tabs-nav::before, .battle-pass-window .cards-header-wrapper .header-background-graphic,
            .cards-header-wrapper .header-background-graphic, .achievement-panel .cards-header-wrapper .header-background-graphic, .help-window2 .cards-header-wrapper .header-background-graphic,
            .mails-window .cards-header-wrapper .header-background-graphic {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/friend-header.png) 11 13 fill stretch}

            .console-wnd.border-window .content, .mc-addon-window .content {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 10 repeat}
            .clan .right-column {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 10 round}
            .clan-list-find-panel, .showcase .card-content {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 9 repeat}
            .skills-window .right-column .middle-graphic {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/middle_graphics.png) 0 11 fill round}

            .settings-window h2, .settings-window .hot-keys-config .scroll-wrapper .static-bar-table tr, .mails-window .content-header, .recovery-item .scroll-wrapper .static-bar-table .table-header, .card-content .table-header-wrapper,
            .clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-0,.clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-1,
            .clan-list-find-panel .clan-list-find-content .scroll-pane .background-wrapper .clan-find-header-2,.clan-list-find-panel .clan-list-butts-wrapper,
            .clan-bless-content .header-bar,.clan-diplomacy-content .header-bar,.clan-edit-page-content .header-bar,.clan-history-content .header-bar,.clan-manage-content .header-bar,.clan-official-page-content .header-bar,
            .clan-priv-page-content .header-bar,.clan-quests-content .header-bar,.clan-rank-edit-content .header-bar,.clan-recruit-content .header-bar,.clan-skills-content .header-bar,.clan-treasury-content .header-bar,
            .clan-other-recruit-content .clan-list-butts-wrapper,.clan-recruit-content .clan-list-butts-wrapper,
            .clan-other-recruit-content .clan-recruit-header-0,.clan-other-recruit-content .clan-recruit-header-1,.clan-other-recruit-content .clan-recruit-header-2,.clan-recruit-content .clan-recruit-header-0,
            .clan-recruit-content .clan-recruit-header-1,.clan-recruit-content .clan-recruit-header-2,
            .clan-treasury-content .table-header, .clan-treasury-content .scroll-wrapper .scroll-pane .history-table tr:first-child, .clan-manage-content .rank-edit-table tr:first-child,
            .showcase .header-bar, .amount-label, .skills-window .right-column .maku-wood, .MBEditor .buttons-wrapper, .help-window2 .scroll-wrapper .scroll-pane .content-header,
            .item-changer .scroll-wrapper .static-bar-table .table-header {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/table_header.png)}

            .clan .left-column .clan-list-repeat {background: 0 0;}
            .clan .left-column .clan-info {background: 0 0;}
            .clan .left-column .clan-list-bottom{background: 0 0;}

            .stats-and-history .season-wnd .season-header {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/match-bar.png) 7 14 fill stretch;}

            .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .stone {border-image: url(../img/gui/recipes/one-reagent.png?v=1734604145496) 6 6 fill round stretch}
            .divide-list-group .card-graphic {border-image: url(../img/gui/recipes/one-reagent.png?v=1734604145496) 5 fill repeat stretch}

            .one-clan-skill .skill-icon-wrapper {background: url(../img/gui/skills/skill-box2.png?v=1734604145496);}
            .skill.chosen {background: url(../img/gui/skills/skill-box-active2.png?v=1734604145496)}
            .skill {background: url(../img/gui/skills/skill-box3.png?v=1734604145496)}

            .skills-window .right-column, .skills-window .right-column .scroll-wrapper .scroll-pane .empty, .addons-panel, .left-grouped-list-and-right-description-window .right-column .right-scroll .scroll-pane .reagents-label {color: #ffffff}

            .skills-window .right-column .scroll-wrapper .scroll-pane .description-wrapper .skill-description .board-wrapper .board-graphic {border-width: 0; border-image: none;}

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
            .card-content .clan-treasury-content:not(.clan-official-page-content):not(.clan-priv-page-content) table {border-right: 1px solid #8005b4; border-left: 1px solid #8005b4; border-bottom: 1px solid #8005b4;}

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
            .card-content .clan-treasury-content:not(.clan-official-page-content):not(.clan-priv-page-content) table tr td {border-right: 1px solid #8005b4; border-left: 1px solid #8005b4; border-bottom: 1px solid #8005b4;}

            .clan-other-recruit-content .green-box, .clan-recruit-content .green-box, .clan-treasury-content .green-box, .clan-manage-content .green-box, .clan-diplomacy-content .green-box, .clan-history-content .chose-show {border: 1px solid #8005b4}
      </style>`).appendTo('body');
  }
}
)();