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
var myKeyPress;

var rightBorderCollision = false;
var leftBorderCollision = false;
var bottomBorderCollision = false;
var topBorderCollision = false;

var rightCollision = false;
var leftCollision = false;
var bottomCollision = false;
var topCollision = false;

var canvasWidth;
var canvasHeight;

var jedi;     // circle Shape
var suspect1;

var listOfObjects = [];

const SX0 = 150, SY0 = 150;

function load() { init(); }

function init() {
  // CIRCLE: Graphics
    var g = new createjs.Graphics();
    var suspect1Graphics = new createjs.Graphics();
  g.beginStroke('black').beginFill('yellow').drawCircle(0, 0, 10);
  suspect1Graphics.beginStroke('red').beginFill('yellow').drawCircle(0, 0, 10);
  // CIRCLE: Shape
  jedi = new createjs.Shape(g);
  jedi.x = SX0; jedi.y = SY0;
  suspect1 = new createjs.Shape(suspect1Graphics);
  suspect1.x = 50; suspect1.y = 50;

  // STAGE
  stage = new createjs.Stage('myCanvas');
  stage.addChild(jedi);
  stage.addChild(suspect1);
  listOfObjects.push(suspect1);
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
      if (leftKeyDown || rightBorderCollision) {
          rightBorderCollision = false;
          jedi.x -= SPEED;
      }
      if (leftKeyDown || rightCollision) {
          rightCollision = false;
          jedi.x -= SPEED;
      }

      if (leftKeyDown || leftBorderCollision) {
          leftBorderCollision = false;
          jedi.x += SPEED;
      }
      if (leftKeyDown || leftCollision) {
          leftCollision = false;
          jedi.x += SPEED;
      }

      if (upKeyDown || bottomBorderCollision) {
          bottomBorderCollision = false;
          jedi.y -= SPEED;
      }

      if (downKeyDown || topBorderCollision) {
          topBorderCollision = false;
          jedi.y += SPEED;
      }
  }

  function  checkBorder() {
      if (jedi.x <= 0)
          leftBorderCollision = true;
      if (jedi.x >= canvasWidth)
          rightBorderCollision = true;
      if (jedi.y <= 0)
          topBorderCollision = true;
      if (jedi.y >= canvasHeight)
          bottomBorderCollision = true;
      for (var i = 0; i < listOfObjects.length; i++) {
          if (listOfObjects[i].x - jedi.x > -20 && listOfObjects[i].x - jedi.x < 0 && abs(listOfObjects[i].y-jedi.y)<20) {
              leftCollision = true;
          }
          if(listOfObjects[i].x - jedi.x > 0 && listOfObjects[i].x - jedi.x < 20 && abs(listOfObjects[i].y-jedi.y)<20) {
              rightCollision = true;
          }
          if (listOfObjects[i].y - jedi.y > -20 && listOfObjects[i].y - jedi.y < 0 && abs(listOfObjects[i].x - jedi.x) < 20) {
              topCollision = true;
          }
          if (listOfObjects[i].y - jedi.y > 0 && listOfObjects[i].y - jedi.y < 20 && abs(listOfObjects[i].x - jedi.x) < 20) {
              bottomCollision = true;
          }
          else {

          }
          
          
      }
  }
  
  function tick(e)
  {
   move();
   stage.update(e);
  }

