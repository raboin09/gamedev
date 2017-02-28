function move()//moves shape 'x' SPEED units in the given direction if KeyDown is true
{
    leftCollision = false;
    rightCollision = false;
    topCollision = false;
    bottomCollision = false;
    storyCheck = false;
    checkBorder();

    if (leftKeyDown && !leftCollision) {
        if (jedi.x - SPEED <= 20) {
            leftCollision = true;
        }
        else {
            jedi.x -= SPEED;
        }
    }

    else if (rightKeyDown && !rightCollision) {
        if (jedi.x + SPEED >= canvasWidth-20) {
            rightCollision = true;
        }
        else {
            jedi.x += SPEED;
        }
    }

    if (upKeyDown && !topCollision) {
        if (jedi.y - SPEED <= 20) {
            topCollision = true;
        }
        else {
            jedi.y -= SPEED;
        }
    }

    if (downKeyDown && !bottomCollision) {
        if (jedi.y + SPEED >= canvasHeight - 30) {
            bottomCollision = true;
        }
        else {
            jedi.y += SPEED;
        }
    }
}



function checkBorder() {
    //Check all object collisions
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

    //check wall collisions
    if(jedi.y + 12 > 400 && jedi.y + 12 < 415){
        bottomCollision = true;
    }

    if(jedi.y - 12 < 400 && jedi.y - 12 > 385){
        topCollision = true;
    }

    if(jedi.x + 12 > 450 && jedi.x + 12 < 465 && jedi.y > 400){
        rightCollision = true;
    }

    if(jedi.x - 12 < 456 && jedi.x - 12 > 450 && jedi.y > 400){
        leftCollision = true;
    }

    //check door triggers
    if(jedi.x + 12 < 175 && jedi.x + 12 > 110 && jedi.y + 10 > 395 && jedi.y + 10 < 405){
        bigToLeftTrigger();
    }

    if(jedi.x + 12 < 175 && jedi.x + 12 > 110 && jedi.y - 10 < 415 && jedi.y - 10 > 395){
        leftToBigTrigger();
    }

    if(jedi.x + 12 < 885 && jedi.x + 12 > 820 && jedi.y + 10 > 395 && jedi.y + 10 < 405){
        bigToRightTrigger();
    }

    if(jedi.x + 12 < 885 && jedi.x + 12 > 820 && jedi.y - 10 < 415 && jedi.y - 10 > 395){
        rightToBigTrigger();
    }


    //check all trigger area collisions
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
        }        //run triggers if true

    }
}

function storyTrigger() {
    if (storyCheck) {
        if (triggeredObject === bountyHunterTrigger) {
            bountyHunterDialogue();
            stage.update();
        }
        else if (triggeredObject === ambassadorTrigger) {
            ambassadorDialogue();
            stage.update();
        }

        else if (triggeredObject === sithTrigger) {
            sithDialogue();
            stage.update();
        }

        else if (triggeredObject === bartenderTrigger) {
            bartenderDialogue();
            stage.update();
        }

        else if (triggeredObject === policeTrigger) {
            policeDialogue();
            stage.update();
        }
    }
    else{
        stage.removeChild(displayText);
    }
}

function bigToLeftTrigger(){
    rightRoom.alpha = .9;
    leftRoom.alpha = 0;
    bigRoom.alpha = .9;
    jedi.y += 40;
}

function leftToBigTrigger() {
    rightRoom.alpha = .9;
    leftRoom.alpha = .9;
    bigRoom.alpha = 0;
    jedi.y -= 40;
}

function bigToRightTrigger() {
    rightRoom.alpha = 0;
    leftRoom.alpha = .9;
    bigRoom.alpha = .9;
    jedi.y += 40;
}

function rightToBigTrigger() {
    rightRoom.alpha = .9;
    leftRoom.alpha = .9;
    bigRoom.alpha = 0;
    jedi.y -= 40;
}