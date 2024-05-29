// ==UserScript==
// @name         Groove Style
// @version      1.0
// @author       Barkozo
// @match        thantos.margonem.pl/
// @match        unia.margonem.pl/
// @match       experimental.margonem.pl/
// @grant        GM_addStyle
// @run-at   document-start
// ==/UserScript==

GM_addStyle ( `

.battle-controller .graphics .header-graphic{background: #101010;}
.battle-controller .graphics .middle-graphic{background: #101010;}
.battle-controller .graphics .bottom-graphic{background: #101010;}
.battle-controller .skill-hider{background: #101010;}

.battle-controller .battle-content{border: 1px solid#cf0a2c !important;}
.battle-controller .battle-content .left-column{border: 1px solid #cf0a2c !important;}
//.battle-controller .battle-content .right-column{display:none !important;}
.battle-controller .skill-usable-add-slots .skill-usable-slot{display: none;}

//body{background: url('https://4kwallpapers.com/images/wallpapers/dreamy-landscape-3840x2160-14973.jpg') !important;}

.cll-alert-content{
background: black !important;
color: #ffffff !important;
}

.cll-alert{
border: 1px solid #cf0a2c !important;
box-shadow: 1px 1px 4px #cf0a2c !important;
background: black !important;
color: #ffffff !important;
}

.cll-alert button{background: #cf0a2c !important;}

.cll-timer{font-family: Arial, Helvetica, sans-serif !important;}
.cll-timer-monster {color: #57e106 !important;}
.cll-timer-highlighted {background: #0a1f42 !important}
.cll-timer-monster[style]{color: red !important;}

.battle-msg {font-size: 12px !important; font-family: Arial, Helvetica, sans-serif !important;}
.battle-msg .dmg {background-color: rgba(0,0,0,.5);border: 1px solid rgba(0,0,0,.5);border-radius: 2px;}

.battle-msg .dmgm {color: #09f;}
.battle-msg .dmgf {color: red;}
.battle-msg .dmgc {color: #9bf;}
.battle-msg .dmgl {color: #ff0;}
.battle-msg .dmgo {color: #f90;}
.battle-msg .dmgd {color: #0f0;}
.battle-msg .fr {color: #0f0;}
.battle-msg .en {color: #ff5f5f;}
.battle-msg.txt {background-color: #96a19662;}
.battle-msg.win {font-weight: 700;color: rgb(0, 255, 0);}
.battle-msg.lose {font-weight: 700;color: #ff0000;}
.battle-msg.exp {font-weight: 700;color: #ffe600;}

.tip-wrapper[data-type=t_item] i.looter{color: #3dff00; text-align: center;}
.tip-wrapper.normal-tip .damage,.tip-wrapper.sticky-tip .damage {color: #3dff00;}

//.tip-wrapper[data-type=t_item] .item-head .common,.tip-wrapper[data-type=t_item] .item-tip-section .common {color: #ffffff;}
//.tip-wrapper[data-type=t_item] .item-head .upgraded,.tip-wrapper[data-type=t_item] .item-tip-section .upgraded {color: #ff0084;}
//.tip-wrapper[data-type=t_item] .item-head .unique,.tip-wrapper[data-type=t_item] .item-tip-section .unique {color: #ffb300;}
//.tip-wrapper[data-type=t_item] .item-head .heroic,.tip-wrapper[data-type=t_item] .item-tip-section .heroic {color: #00c2ff;}
//.tip-wrapper[data-type=t_item] .item-head .legendary,.tip-wrapper[data-type=t_item] .item-tip-section .legendary {color: #ff6600;}
//.tip-wrapper[data-type=t_item] .item-head .artefact,.tip-wrapper[data-type=t_item] .item-tip-section .artefact {color: #ff0000}
.tip-wrapper[data-type=t_item] .item-head .item-type {color: #02ff00;}
.tip-wrapper[data-type=t_item] .item-tip-section.s-0 .upgraded {color: #ff59af;}
.tip-wrapper[data-type=t_item] .item-tip-section.s-5 {color: #ff6600;text-align: center;}
.tip-wrapper[data-type=t_item] .item-tip-section.s-9 .level-required .noreq {color: #fe5555;}

.header-title{color: #3dff00 !important;}

//.new-chat-window  .menu-card .chat-channel-card-wrapper{border: #cf0a2c 1px solid !important;}
.new-chat-window {background: #101010 !important;}

.interface-layer{border-image: url('https://i.imgur.com/oi7QxzB.png') 7 repeat !important;}
.main-column.right-column {background: url('https://i.imgur.com/oTLO9A2.png') -251px 0px !important;}
.positioner.top .bg{background: url('https://i.imgur.com/VW7joVD.png') 0px -61px repeat !important;}
.positioner.bottom .bg{background: url('https://i.imgur.com/VW7joVD.png') 0px 0px repeat !important;}
.border {background: url(https://i.imgur.com/oTLO9A2.png) -252px 0 !important; }

.tw-list-item{background: #202020 !important;}

.border-window.transparent .border-image{box-shadow: 0 0 0 1px #010101,0 0 0 2px #cf0a2c, 0 0 0 3px #0c0d0d,2px 2px 3px 3px #0c0d0d66 !important;}

.loot-window .button-holder .button{background:linear-gradient(to top,#101010,#101010)}
.loot-window .button-holder .button:before{box-shadow:inset 0 0 1px 1px #101010}
.loot-window .button-holder .button.want{background:linear-gradient(to top,#101010,#101010)}
.loot-window .button-holder .button.want:before{box-shadow:inset 0 0 1px 1px #101010}
.loot-window .button-holder .button.not{background:linear-gradient(to top,#101010,#101010)}
.loot-window .button-holder .button.not:before{box-shadow:inset 0 0 1px 1px #101010}
.loot-window .button-holder .button.must{background:linear-gradient(to top,#101010,#101010)}

.content .loot-window .items-wrapper .loot-item-wrapper .button-holder .button.green:not(.pressed){border-color: #101010; box-shadow:inset 0 0 1px 1px #3dff00 !important;}

.button.green, .widget-button.green  {
    background-image: linear-gradient(to top, #101010, #101010)!important;;
    box-shadow: inset 0 0 1px 1px #b8b8b8, inset 0 0 0 3px #101010!important;
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

.mark-message-span.click-able{color: lime !important;}

` );




