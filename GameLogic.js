var stage;

var spriteAnimationData = {
    images: ["img/jedi.png"],
    frames: [[5, 4, 23, 42],[36, 5, 23, 41],[69, 4, 23, 42],[102, 5, 23 , 41],
            [6, 52, 21, 42], [38, 53, 20, 41], [70, 52, 21, 42], [102, 53, 22, 41],
            [5, 100, 21, 42], [38, 101, 20, 41], [69, 100, 21, 42], [100, 101, 22, 41],
            [4, 148, 25, 42], [38, 149, 24, 41], [68, 148, 25, 42], [99, 149, 24, 41]],
    animations: {
        standDown: 0,
        standLeft: 4,
        standRight: 8,
        standUp: 12,
        walkDown:
            {
                frames: [0, 1, 2, 3],
                speed: .6
            },
        walkLeft:
            {
                frames: [4, 5, 6, 7],
                speed: .6
            },
        walkRight:
            {
                frames: [8, 9, 10, 11],
                speed: .6
            },
        walkUp:
            {
                frames: [12, 13, 14, 15],
                speed: .6
            }
}
};

var displayText;
var bartenderDisplayText;
var bountyHunterDisplayText;
var ambassadorDisplayText;
var sithDisplayText;
var policeDisplayText;
var jediDisplayText;

var bartenderDisplayTextBool = false;
var bountyHunterDisplayTextBool = false;
var ambassadorDisplayTextBool = false;
var sithDisplayTextBool = false;
var policeDisplayTextBool = false;
var jediDisplayTextBool = false;
var displayTextBool = false;

var dialogBox;

var ambassadorTalkingHead;
var sithTalkingHead;
var policeTalkingHead;
var bartenderTalkingHead;
var bountyHunterTalkingHead;

var backgroundImage = new Image();
var backgroundBitmap;

var SPEED = 4;

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

var jediSpriteSheet = new createjs.SpriteSheet(spriteAnimationData);
var jediFacingInt;

var jediWalkDown;
var jediStandDown;

var jediWalkUp;
var jediStandUp;

var jediWalkLeft;
var jediStandLeft;

var jediWalkRight;
var jediStandRight;

var bountyHunterContainer;
var bountyHunter;
var bountyHunterTrigger;
var bountyHunterSprite;
var bountyHunterStoryCount = 0;

var ambassadorContainer;
var ambassador;
var ambassadorTrigger;
var ambassadorSprite;
var ambassadorStoryCount = 0;

var bartender;
var bartenderTrigger;
var bartenderSprite;
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
var sithSprite;
var sithStoryCount = 0;

var police;
var policeTrigger;
var sithSprite;
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
    else if(upKeyDown==false && downKeyDown==false && rightKeyDown==false && leftKeyDown==false){
        if (jediFacingInt == 0) {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = false;
            jediStandLeft.visible = false;
            jediStandDown.visible = true;
            jediStandRight.visible = false;
        }
        else if (jediFacingInt == 1) {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = false;
            jediStandLeft.visible = true;
            jediStandDown.visible = false;
            jediStandRight.visible = false;
        }
        else if (jediFacingInt == 2) {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = true;
            jediStandLeft.visible = false;
            jediStandDown.visible = false;
            jediStandRight.visible = false;
        }
        else if (jediFacingInt == 3) {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = false;
            jediStandLeft.visible = false;
            jediStandDown.visible = false;
            jediStandRight.visible = true;
        }
    }
    storyTrigger();
    stage.update(e);
}

