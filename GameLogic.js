var stage;
var keys = {};

var SPEED = 2;

const ARROW_KEY_LEFT = 37;
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

var collisionDetected = false;

var canvasWidth;
var canvasHeight;

var jedi;
var jediX = 150, jediY = 150;

var bystander1;
var bystander1X = 200, bystander1Y = 500;

var bystander2;

var listOfObjects;
listOfObjects = [];

function load() {
    init();
}

function init() {
    // STAGE
    stage = new createjs.Stage('myCanvas');

// Create jedi object
    var jediGraphic = new createjs.Graphics();
    jediGraphic.beginStroke("black").beginFill("red").drawCircle(0, 0, 10);
    jedi = new createjs.Shape(jediGraphic);
    jedi.x = jediX;
    jedi.y = jediY;
    stage.addChild(jedi);

//Create bystander1 object
    var bystander1Graphic = new createjs.Graphics();
    bystander1Graphic.beginStroke("black").beginFill("blue").drawCircle(0, 0, 10);
    bystander1 = new createjs.Shape(bystander1Graphic);
    bystander1.x = bystander1X;
    bystander1.y = bystander1Y;
    listOfObjects.push(bystander1);
    stage.addChild(bystander1);

    //Create bystander2 object
    var bystander2Graphic = new createjs.Graphics();
    bystander2Graphic.beginStroke("black").beginFill("green").drawCircle(0, 0, 10);
    bystander2 = new createjs.Shape(bystander2Graphic);
    bystander2.x = bystander1X - 50;
    bystander2.y = bystander1Y - 50;
    listOfObjects.push(bystander2);
    stage.addChild(bystander2);

    stage.update();

    canvasHeight = 650;
    canvasWidth = 950;


    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.setFPS(60);

    window.onkeyup = keyUpHandler;
    window.onkeydown = keyDownHandler;
}


function keyDownHandler(e) {
    switch (e.keyCode) {
        case ARROW_KEY_LEFT:
            leftKeyDown = true;
            break;
        case ARROW_KEY_RIGHT:
            rightKeyDown = true;
            break;
        case ARROW_KEY_UP:
            upKeyDown = true;
            break;
        case ARROW_KEY_DOWN:
            downKeyDown = true;
            break;
    }
}

function keyUpHandler(e) {
    switch (e.keyCode) {
        case ARROW_KEY_LEFT:
            leftKeyDown = false;
            break;
        case ARROW_KEY_RIGHT:
            rightKeyDown = false;
            break;
        case ARROW_KEY_UP:
            upKeyDown = false;
            break;
        case ARROW_KEY_DOWN:
            downKeyDown = false;
            break;
    }
}


function move()//moves shape 'x' SPEED units in the given direction if KeyDown is true
{
    leftCollision = false;
    rightCollision = false;
    topCollision = false;
    bottomCollision = false;

    checkBorder();

    if (leftKeyDown && !leftCollision) {
        if(jedi.x - SPEED <= 0){
            leftCollision = true;
        }
        else{
            jedi.x -= SPEED;
        }
    }

    else if (rightKeyDown && !rightCollision) {
        if(jedi.x + SPEED >= canvasWidth){
            rightCollision = true;
        }
        else{
            jedi.x += SPEED;
        }
    }

    if (upKeyDown && !topCollision) {
        if(jedi.y - SPEED <= 0){
            topCollision = true;
        }
        else{
            jedi.y -= SPEED;
        }
    }

    if (downKeyDown && !bottomCollision) {
        if (jedi.y + SPEED >= canvasHeight) {
            bottomCollision = true;
        }
        else {
            jedi.y += SPEED;
        }
    }
}

function checkBorder() {
    for(var i=0; i<listOfObjects.length; i++){
        if(jedi.x - listOfObjects[i].x >= 0 && jedi.x - listOfObjects[i].x <= 20 && Math.abs(jedi.y - listOfObjects[i].y) < 15){
            leftCollision = true;
        }
        else if(jedi.x - listOfObjects[i].x <= 0 && jedi.x - listOfObjects[i].x >= -20 && Math.abs(jedi.y - listOfObjects[i].y) < 15){
            rightCollision = true;
        }
        else if(jedi.y - listOfObjects[i].y <= 0 && jedi.y - listOfObjects[i].y >= -20 && Math.abs(jedi.x - listOfObjects[i].x) < 15){
            bottomCollision = true;
        }
        else if(jedi.y - listOfObjects[i].y >= 0 && jedi.y - listOfObjects[i].y <= 20 && Math.abs(jedi.x - listOfObjects[i].x) < 15){
            topCollision = true;
        }

    }
}

function tick(e) {
    move();
    stage.update(e);
}

