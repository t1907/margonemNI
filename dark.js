(function() {
    if (getCookie('interface')==='ni') {
      $(`<style> 
        #GAME_CANVAS {image-rendering: auto !important;}

        .gargonem-otherlist-other-button{color: lime !important;}
        .gargonem-window {color: #000000 !important; background: #101010; border-radius: 0px !important; box-shadow: 0 0 0 1px #000, 0 0 0 2px #808080, 0 0 0 3px #000000, 2px 2px 3px 3px #000 !important;}

        .cll-alert-content{background: #101010 !important;color: #ffffff !important;}
        .cll-alert{border: 1px solid #808080 !important; box-shadow: 0 0 0 1px #808080 !important; background: #101010 !important; color: #ffffff !important;}
        .cll-alert button{background: #101010 !important; border: 1px solid #808080 !important;}
        .cll-alert button:hover {border: 1px solid lime !important;}
        .cll-alert button:focus {border: 1px solid #57e106 !important;}
        .cll-timer{font-family: Arial, Helvetica, sans-serif !important;}
        .cll-timer-monster {color: #57e106 !important;}
        .cll-timer-highlighted {background: #0a1f42 !important}
        .cll-timer-monster[style]{color: red !important;}

        .battle-controller .graphics .header-graphic{background: #101010;}
        .battle-controller .graphics .middle-graphic{background: #101010;}
        .battle-controller .graphics .bottom-graphic{background: #101010;}
        .battle-controller .skill-hider{background: #101010;}

        .battle-controller .battle-content{border: 1px solid#cf0a2c !important;}
        .battle-controller .battle-content .left-column{border: 1px solid #cf0a2c !important;}
        .battle-controller .battle-content .right-column{display:none !important;}
        .battle-controller .skill-usable-add-slots .skill-usable-slot{display: none;}

        .chat-channel-card-wrapper{border: 1px solid #808080 !important;}
        .new-chat-window .chat-message-wrapper, .chat-input-wrapper .magic-input-wrapper, .chat-input-wrapper .control-wrapper .menu-card, .chat-input-wrapper .control-wrapper .chat-config-wrapper {
            border: 1px solid #808080 !important;
        }
        .chat-channel-card-wrapper {border: 1px solid #808080 !important;}
        .chat-input-wrapper {background: #101010 !important;}
        .new-chat-window  .menu-card .chat-channel-card-wrapper{border: #1f1f1f 1px solid !important;}
        .new-chat-window {background: #101010 !important;}
        .chat-configure-window .chat-option-header {color: #FFFFFF !important; border: 1px solid #808080 !important; background: #101010 !important;}

        .linked-chat-item[data-item-type="t-norm"] {color: #9da1a7 !important;}
        .linked-chat-item[data-item-type="t-uniupg"] {color: #fffb00 !important;}
        .linked-chat-item[data-item-type="t-her"] {color: #38b8eb !important;}
        .linked-chat-item[data-item-type="t-upgraded"] {color: #ff59af !important;}
        .linked-chat-item[data-item-type="t-leg"] {color: #ff8400 !important;}

        .game-window-positioner .character_wrapper .stats-wrapper {background: #101010 !important; border: 1px solid #808080 !important; }
        .game-window-positioner .character_wrapper .stats-wrapper .header-title{background: #101010 !important; border-bottom: 1px solid #808080 !important;}

        .interface-layer{border-image: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/oi7QxzB.png') 7 repeat !important;}
        .main-column.right-column {background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/oTLO9A2.png') -251px 0px !important;}
        .positioner.top .bg{background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/VW7joVD.png') 0 -61px repeat !important;}
        .positioner.bottom .bg{background: url('https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/VW7joVD.png') 0 0 repeat !important;}
        .border {background: transparent !important;}

        .border-window.transparent {border-image: none;}
        .border-window-middle-1-background{border: #101010;}
        .border-window {border-image: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/border-image.png) 32 20 fill repeat !important;}

        .loot-window .middle-graphics{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/addons-panel.png) 0 31 fill repeat !important;}
        .loot-window .bottom-wrapper .bottom-graphic{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/addons-panel.png) !important;}
        .border-window-bottom-bar-background-stretch{border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/addons-panel.png) 0 20 fill stretch !important;}
        .loot-window .items-wrapper .loot-item-wrapper{background:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/addons-panel.png); border: 1px solid #808080 !important;}

        .addons-panel .right-column .middle-right-column-graphics {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/addons-panel.png)!important;}
        .left-grouped-list-and-right-description-window .right-column .middle-right-column-graphics {background: url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/images/addons-panel.png)!important;}

        .tw-list-item{background: #101010 !important;}
        .border-window.transparent .border-image{box-shadow: 0 0 0 1px #000, 0 0 0 2px #808080, 0 0 0 3px #000000, 2px 2px 3px 3px #000 !important; border-radius: 0px;}

        .loot-window .button-holder .button{background:linear-gradient(to top,#101010,#101010)}
        .loot-window .button-holder .button:before{box-shadow:inset 0 0 1px 1px #101010}
        .loot-window .button-holder .button.want{background:linear-gradient(to top,#101010,#101010)}
        .loot-window .button-holder .button.want:before{box-shadow:inset 0 0 1px 1px #101010}
        .loot-window .button-holder .button.not{background:linear-gradient(to top,#101010,#101010)}
        .loot-window .button-holder .button.not:before{box-shadow:inset 0 0 1px 1px #101010}
        .loot-window .button-holder .button.must{background:linear-gradient(to top,#101010,#101010)}

        .button.mz-widget, .widget-button.mz-widget {
            background: linear-gradient(to top, #101010, #252525); box-shadow: inset 0 0 1px 1px #414141, inset 0 0 0 3px #0c0d0d;
            }

        .button.mz-widget:before, .widget-button.mz-widget:before {
            box-shadow: inset 0 0 0px 1px #706854, inset 0 0 0 3px #25261d;
            }

        .button.green, .widget-button.green {
            background-image: linear-gradient(to top, #101010, #101010)!important;
            box-shadow: inset 0 0 1px 1px #808080, inset 0 0 0 3px #101010!important;
        }

        .button.red, .widget-button.red  {
            background-image: linear-gradient(to top, #101010, #101010)!important;
            box-shadow: inset 0 0 1px 1px #cf0a2c, inset 0 0 0 3px #101010 !important;
        }

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

</style>`).appendTo('body');
}
}

)();
