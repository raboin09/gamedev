var stage;
var keys = {};

var displayText;
var displayTextBool = false;

var backgroundImage = new Image();
var backgroundBitmap;

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

var dialogueTimer;

var canvasWidth = 950;
var canvasHeight = 650;

var jediGraphic;
var jedi;
var jediX = 150, jediY = 150;

var bountyHunterContainer;
var bountyHunter;
var bountyHunterTrigger;
var bountyHunterStoryCount = 0;

var ambassadorContainer;
var ambassador;
var ambassadorTrigger;
var ambassadorStoryCount = 0;

var bartender;
var bartenderTrigger;
var bartenderStoryCount = 0;

var bigToRightDoorShape;
var rightToBigDoorShape;
var bigToLeftDoorShape;
var leftToBigDoorShape;

var bigRoom;
var leftRoom;
var rightRoom;

var sith;
var sithTrigger;
var sithStoryCount = 0;

var police;
var policeTrigger;
var policeStoryCount = 0;

var storyArcCount = 0;

var listOfObjects;
listOfObjects = [];
var triggeredObject;
var listOfTriggers;
listOfTriggers = [];

function load() {
    init();
}

function init() {
    stage = new createjs.Stage('myCanvas');

    canvasHeight = 650;
    canvasWidth = 950;

    backgroundImage.src = 'img/base.jpg';
    backgroundImage.onload = function () {
        backgroundBitmap = new createjs.Bitmap(backgroundImage);
        stage.addChild(backgroundBitmap);
        stage.update();
        createjs.Ticker.addEventListener("tick", tick);
        createjs.Ticker.setFPS(60);

        window.onkeyup = keyUpHandler;
        window.onkeydown = keyDownHandler;
        drawObjects();
    }

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

function tick(e) {
    if (upKeyDown || downKeyDown || rightKeyDown || leftKeyDown) {
        move();
    }
    storyTrigger();
    stage.update(e);
}

