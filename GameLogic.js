var stage;
var keys = {};

var SPEED = 2;

const ARROW_KEY_LEFT  = 37;
const ARROW_KEY_RIGHT = 39;
const ARROW_KEY_UP = 38;
const ARROW_KEY_DOWN = 40;

var leftKeyDown = false;
var rightKeyDown = false;
var upKeyDown = false;
var downKeyDown = false;

var rightCollision = false;
var leftCollision = false;
var bottomCollision = false;
var topCollision = false;

var canvasWidth;
var canvasHeight;

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
  canvasHeight = 650;
  canvasWidth = 950;


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
 
  
  function move()//moves shape 'x' SPEED units in the given direction if KeyDown is true
  {
      checkBorder();
      if (leftKeyDown || rightCollision) {
          rightCollision = false;
          s.x -= SPEED;
      }

      if (rightKeyDown || leftCollision) {
          leftCollision = false;
          s.x += SPEED;                             
      }

      if (upKeyDown || bottomCollision) {
          bottomCollision = false;
          s.y -= SPEED;
      }

      if (downKeyDown || topCollision) {
          topCollision = false;
          s.y += SPEED;
      }
  }

  function  checkBorder() {
      if (s.x <= 0)
          leftCollision = true;
      if (s.x >= canvasWidth)
          rightCollision = true;
      if (s.y <= 0)
          topCollision = true;
      if (s.y >= canvasHeight)
          bottomCollision = true;
  }
  
  function tick(e)
  {
   move();
   stage.update(e);
  }

