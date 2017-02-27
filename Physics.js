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

    if(jedi.y + 12 > 400 && jedi.y + 12 < 415){
        bottomCollision = true;
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
            bountyHunterStory();
            stage.update();
        }
        else if (triggeredObject === ambassadorTrigger) {
            ambassadorStory();
            stage.update();
        }

        else if (triggeredObject === sithTrigger) {
            sithStory();
            stage.update();
        }

        else if (triggeredObject === bartenderTrigger) {
            bartenderStory();
            stage.update();
        }

        else if (triggeredObject === policeTrigger) {
            policeStory();
            stage.update();
        }
    }
    else{
        stage.removeChild(displayText);
    }
}
