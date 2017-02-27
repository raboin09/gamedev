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

var storyCheck = false;

var canvasWidth;
var canvasHeight;

var jediGraphic;
var jedi;
var jediX = 150, jediY = 150;

var bystander1Container;
var bystander1;
var bystander1Trigger;
var bystander1X = 200, bystander1Y = 500;

var bystander2;
var bystander2Trigger;
var bystander2X = 400, bystander2Y = 100;

var listOfObjects;
listOfObjects = [];

var triggeredObject;
var listOfTriggers;
listOfTriggers = [];

function load() {
    init();
}

function init() {
    // STAGE
    stage = new createjs.Stage('myCanvas');

    // Create jedi object
    jediGraphic = new createjs.Graphics();
    jediGraphic.beginStroke("black").beginFill("red").drawCircle(0, 0, 10);
    jedi = new createjs.Shape(jediGraphic);
    jedi.x = jediX;
    jedi.y = jediY;
    stage.addChild(jedi);
    bystander1Container = new createjs.Container();


    //Create bystander1Trigger
    var bystander1TriggerGraphic = new createjs.Graphics();
    bystander1TriggerGraphic.beginStroke("black").beginFill("yellow").drawCircle(0, 0, 20);
    bystander1Trigger = new createjs.Shape(bystander1TriggerGraphic);
    bystander1Trigger.x = 400;
    bystander1Trigger.y = 400;
    bystander1Trigger.visible = false;
    listOfTriggers.push(bystander1Trigger);
    stage.addChild(bystander1Trigger);

    //Create bystander1 object
    var bystander1Graphic = new createjs.Graphics();
    bystander1Graphic.beginStroke("black").beginFill("blue").drawCircle(0, 0, 10);
    bystander1 = new createjs.Shape(bystander1Graphic);
    bystander1.x = 400;
    bystander1.y = 400;
    listOfObjects.push(bystander1);
    stage.addChild(bystander1);

    //Create bystander2 object
    var bystander2Graphic = new createjs.Graphics();
    bystander2Graphic.beginStroke("black").beginFill("green").drawCircle(0, 0, 10);
    bystander2 = new createjs.Shape(bystander2Graphic);
    bystander2.x = 100;
    bystander2.y = 100;
    listOfObjects.push(bystander2);
    stage.addChild(bystander2);

    bystander1Container.addChild(bystander1, bystander1Trigger);

    stage.addChild(bystander1Container);

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
    storyCheck = false;

    checkBorder();

    if (leftKeyDown && !leftCollision) {
        if (jedi.x - SPEED <= 0) {
            leftCollision = true;
        }
        else {
            jedi.x -= SPEED;
        }
    }

    else if (rightKeyDown && !rightCollision) {
        if (jedi.x + SPEED >= canvasWidth) {
            rightCollision = true;
        }
        else {
            jedi.x += SPEED;
        }
    }

    if (upKeyDown && !topCollision) {
        if (jedi.y - SPEED <= 0) {
            topCollision = true;
        }
        else {
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
    for (var i = 0; i < listOfObjects.length; i++) {
        if (jedi.x - listOfObjects[i].x >= 0 && jedi.x - listOfObjects[i].x <= 20 && Math.abs(jedi.y - listOfObjects[i].y) < 15) {
            leftCollision = true;
        }
        else if (jedi.x - listOfObjects[i].x <= 0 && jedi.x - listOfObjects[i].x >= -20 && Math.abs(jedi.y - listOfObjects[i].y) < 15) {
            rightCollision = true;
        }
        else if (jedi.y - listOfObjects[i].y <= 0 && jedi.y - listOfObjects[i].y >= -20 && Math.abs(jedi.x - listOfObjects[i].x) < 15) {
            bottomCollision = true;
        }
        else if (jedi.y - listOfObjects[i].y >= 0 && jedi.y - listOfObjects[i].y <= 20 && Math.abs(jedi.x - listOfObjects[i].x) < 15) {
            topCollision = true;
        }
    }

    for (var i = 0; i < listOfTriggers.length; i++) {
        if (jedi.x - listOfTriggers[i].x >= 0 && jedi.x - listOfTriggers[i].x <= 30 && Math.abs(jedi.y - listOfTriggers[i].y) < 25) {
            storyCheck = true;
            triggeredObject = listOfTriggers[i];
        }
        else if (jedi.x - listOfTriggers[i].x <= 0 && jedi.x - listOfTriggers[i].x >= -30 && Math.abs(jedi.y - listOfTriggers[i].y) < 25) {
            storyCheck = true;
            triggeredObject = listOfTriggers[i];
        }
        else if (jedi.y - listOfTriggers[i].y <= 0 && jedi.y - listOfTriggers[i].y >= -30 && Math.abs(jedi.x - listOfTriggers[i].x) < 25) {
            storyCheck = true;
            triggeredObject = listOfTriggers[i];
        }
        else if (jedi.y - listOfTriggers[i].y >= 0 && jedi.y - listOfTriggers[i].y <= 30 && Math.abs(jedi.x - listOfTriggers[i].x) < 25) {
            storyCheck = true;
            triggeredObject = listOfTriggers[i];
        }
    }

    if(storyCheck){
        if(triggeredObject === bystander1Trigger){
            bystander1.x = jedi.x+26;
            bystander1.y = jedi.y-26;
            bystander1Trigger.x = jedi.x + 26;
            bystander1Trigger.y = jedi.y - 26;
        }
        else if(triggeredObject === bystander2Trigger){
            bystander.visible = false;
        }
    }

}

function tick(e) {
    if(upKeyDown || downKeyDown || rightKeyDown || leftKeyDown){
        move();
    }
    stage.update(e);
}

