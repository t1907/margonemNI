(function() {
  $(`<style>
    #GAME_CANVAS {image-rendering: auto !important;}
    .interface-element-border-window-frame{
      border-style:solid;
      border-width:34px 20px;
      border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/red/window-frame.png) 32 20 fill repeat;
      background-size:100% 100%
    }
    .border-window{
      color: #444444; 
      pointer-events:auto;
      position:absolute;
      min-width:160px;
      border-style:solid;
      border-width:34px 20px;
      border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/red/window-frame.png) 32 20 fill repeat;
      background-size:100% 100%
    }
    .battle-controller .graphics .battle-border{
      position:absolute;
      left:0;
      right:0;
      top:0;
      bottom:-34px;
      border-style:solid;
      border-width:34px 20px;
      border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/red/window-frame.png) 32 20 fill repeat;
      background-size:100% 100%
    }
    .additional-skill-panel .graphics .additional-skill-panel-border{
      position:absolute;
      left:0;
      right:0;top:0;
      bottom:-34px;
      border-style:solid;
      border-width:34px 20px;
      border-image:url(https://raw.githubusercontent.com/t1907/margonemNI/refs/heads/main/red/window-frame.png) 32 20 fill repeat;
      background-size:100% 100%
    }

    </style>`).appendTo('head');
  }
)();