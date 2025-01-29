(function() {
     $(`<style> 
.tip-wrapper {box-shadow: 0 0 0 0 #2b282a,0 0 0 1px #353131,0 0 0 2px #191311,0 0 0 3px #2b2727,0 0 0 4px #59595a,0 0 0 5px #9da1a7,0 0 0 6px #5a585b,0 0 0 7px #2c2625; color: #e6d6bf;}

.tip-wrapper.normal-tip .damage,.tip-wrapper.sticky-tip .damage {color: #20ff20;}

.tip-wrapper .content .info-wrapper .nick {background: #808080; border: 1px solid #8c8c8c;}

.tip-wrapper .content .info-wrapper .m {color: #0000ff}
.tip-wrapper .content .info-wrapper .e {color: #ffce00}
.tip-wrapper .warrior-mana {color: #00abff}
.tip-wrapper .warrior-energy {color: #ffab00}

.tip-wrapper[data-type=t_item] .item-head .common,.tip-wrapper[data-type=t_item] .item-tip-section .common {color: #808080;}
.tip-wrapper[data-type=t_item] .item-head .upgraded,.tip-wrapper[data-type=t_item] .item-tip-section .upgraded {color: #e45d3b;}
.tip-wrapper[data-type=t_item] .item-head .unique,.tip-wrapper[data-type=t_item] .item-tip-section .unique {color: #fac633;}
.tip-wrapper[data-type=t_item] .item-head .heroic,.tip-wrapper[data-type=t_item] .item-tip-section .heroic {color: #3eaff1;}
.tip-wrapper[data-type=t_item] .item-head .legendary,.tip-wrapper[data-type=t_item] .item-tip-section .legendary {color: #e45d3b;}
.tip-wrapper[data-type=t_item] .item-head .artefact,.tip-wrapper[data-type=t_item] .item-tip-section .artefact {color: #e45d3b;}

.tip-wrapper[data-type=t_item] .item-head {background: #303030; border: 1px solid rgb(80 80 80);}
.tip-wrapper[data-type=t_item] .item-head .item-builds,.tip-wrapper[data-type=t_item] .item-head .item-type {color: #c7c7c7;}
.tip-wrapper[data-type=t_item] .item-tip-section {border-bottom: 1px solid rgb(255 255 255 / 50%);}
.tip-wrapper[data-type=t_item] .item-tip-section.s-5 {color: #0f0}
.tip-wrapper[data-type=t_item] .item-tip-section.s-7 {color: #c2c2c2;}
.tip-wrapper[data-type=t_item] i.looter {color: #ff0000;}

.tip-wrapper[data-item-type=heroic],.tip-wrapper[data-item-type=t-her] {box-shadow: 0 0 0 0 #2b282a,0 0 0 1px #353131,0 0 0 2px #191311,0 0 0 3px #2b2727,0 0 0 4px #59595a,0 0 0 5px #38b8eb,0 0 0 6px #5a585b,0 0 0 7px #2c2625}

.tip-wrapper[data-item-type=t-upgraded],.tip-wrapper[data-item-type=upgraded] {box-shadow: 0 0 0 0 #2b282a,0 0 0 1px #353131,0 0 0 2px #191311,0 0 0 3px #2b2727,0 0 0 4px #59595a,0 0 0 5px #ff59af,0 0 0 6px #5a585b,0 0 0 7px #2c2625}

.tip-wrapper[data-item-type=elite],.tip-wrapper[data-item-type=t-elite],.tip-wrapper[data-item-type=t-uniupg],.tip-wrapper[data-item-type=unique] {box-shadow: 0 0 0 0 #2b282a,0 0 0 1px #353131,0 0 0 2px #191311,0 0 0 3px #2b2727,0 0 0 4px #59595a,0 0 0 5px #fffb00,0 0 0 6px #5a585b,0 0 0 7px #2c2625}

.tip-wrapper[data-item-type=legendary],.tip-wrapper[data-item-type=t-leg] {box-shadow: 0 0 0 0 #d676b6,0 0 0 1px #ff0000,0 0 0 2px #ff4000,0 0 0 3px #2b2727,0 0 0 4px #59595a,0 0 0 5px #ff8400,0 0 0 6px #5a585b,0 0 0 7px #2c2625}

.tip-wrapper[data-item-type=artefact],.tip-wrapper[data-item-type=t-art] {box-shadow: 0 0 0 0 #2b282a,0 0 0 1px #353131,0 0 0 2px #191311,0 0 0 3px #2b2727,0 0 0 4px #59595a,0 0 0 5px #e84646,0 0 0 6px #5a585b,0 0 0 7px #2c2625}

.tip-wrapper[data-item-type=normal],.tip-wrapper[data-item-type=t-norm] {box-shadow: 0 0 0 0 #2b282a,0 0 0 1px #353131,0 0 0 2px #191311,0 0 0 3px #2b2727,0 0 0 4px #59595a,0 0 0 5px #9da1a7,0 0 0 6px #5a585b,0 0 0 7px #2c2625}

    </style>`).appendTo('head');
  }
)();