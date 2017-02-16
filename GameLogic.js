var stage;
var keys = {};

var SPEED = 1.75;

const ARROW_KEY_LEFT  = 37;
const ARROW_KEY_RIGHT = 39;
const ARROW_KEY_UP = 38;
const ARROW_KEY_DOWN = 40;

var leftKeyDown = false;
var rightKeyDown = false;
var upKeyDown = false;
var downKeyDown = false;

var s;     // circle Shape
const SX0 = 150, SY0 = 150;

function load() { init(); }

function init() {
  // CIRCLE: Graphics
  var g = new createjs.Graphics();
  g.beginStroke('black').beginFill('yellow').drawCircle(0, 0, 10);

  // CIRCLE: Shape
  s = new createjs.Shape(g);
  s.x = SX0; s.y = SY0;

  // STAGE
  stage = new createjs.Stage('myCanvas');
  stage.addChild(s);
  stage.update();
  
  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.setFPS(60);

   window.onkeyup = keyUpHandler;
   window.onkeydown = keyDownHandler;
  }
  
  
  function keyDownHandler(e)
  {
   switch(e.keyCode)
   {
    case ARROW_KEY_LEFT:  leftKeyDown = true; break;
    case ARROW_KEY_RIGHT: rightKeyDown = true; break;
    case ARROW_KEY_UP:    upKeyDown = true; break;
    case ARROW_KEY_DOWN:  downKeyDown = true; break;
   } 
  }
  
  function keyUpHandler(e)
  {
   switch(e.keyCode)
   {
    case ARROW_KEY_LEFT:  leftKeyDown = false; break;
    case ARROW_KEY_RIGHT: rightKeyDown = false; break;
    case ARROW_KEY_UP:    upKeyDown = false; break;
    case ARROW_KEY_DOWN:  downKeyDown= false; break;
   } 
  }
 
  
  function move()
  {
   if(leftKeyDown) s.x -= SPEED;
   if(rightKeyDown) s.x += SPEED;
   if(upKeyDown) s.y -= SPEED;
   if(downKeyDown) s.y += SPEED;
  }
  
  
  function tick(e)
  {
   move();
   stage.update();
  }

