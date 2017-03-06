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
            jediWalkUp.visible = false;
            jediWalkLeft.visible = true;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = false;
            jediStandLeft.visible = false;
            jediStandDown.visible = false;
            jediStandRight.visible = false;

            jediFacingInt = 1;
            jedi.x -= SPEED;
        }
    }

    else if (rightKeyDown && !rightCollision) {
        if (jedi.x + SPEED >= canvasWidth-20) {
            rightCollision = true;
        }
        else {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = true;

            jediStandUp.visible = false;
            jediStandLeft.visible = false;
            jediStandDown.visible = false;
            jediStandRight.visible = false;

            jediFacingInt = 3;
            jedi.x += SPEED;
        }
    }

    else if (upKeyDown && !topCollision) {
        if (jedi.y - SPEED <= 20) {
            topCollision = true;
        }
        else {
            jediWalkUp.visible = true;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = false;
            jediStandLeft.visible = false;
            jediStandDown.visible = false;
            jediStandRight.visible = false;

            jediFacingInt = 2;
            jedi.y -= SPEED;
        }
    }

    else if (downKeyDown && !bottomCollision) {
        if (jedi.y + SPEED >= canvasHeight - 30) {
            bottomCollision = true;
        }
        else {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = true;
            jediWalkRight.visible = false;

            jediStandUp.visible = false;
            jediStandLeft.visible = false;
            jediStandDown.visible = false;
            jediStandRight.visible = false;
            jediFacingInt = 0;
            jedi.y += SPEED;
        }
    }

    jediStandDown.x = jedi.x - 18;
    jediStandDown.y = jedi.y - 30;

    jediStandUp.x = jedi.x - 18;
    jediStandUp.y = jedi.y - 30;

    jediStandLeft.x = jedi.x - 18;
    jediStandLeft.y = jedi.y - 30;

    jediStandRight.x = jedi.x - 18;
    jediStandRight.y = jedi.y - 30;

    jediWalkDown.x = jedi.x - 18;
    jediWalkDown.y = jedi.y - 30;

    jediWalkUp.x = jedi.x - 18;
    jediWalkUp.y = jedi.y - 30;

    jediWalkLeft.x = jedi.x - 18;
    jediWalkLeft.y = jedi.y - 30;

    jediWalkRight.x = jedi.x - 18;
    jediWalkRight.y = jedi.y - 30;

}



function checkBorder() {
    //Check all object collisions
    for (var i = 0; i < listOfObjects.length; i++) {
        if (jedi.x - listOfObjects[i].x >= 0 && jedi.x - listOfObjects[i].x <= 25 && Math.abs(jedi.y - listOfObjects[i].y) < 25) {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = false;
            jediStandLeft.visible = true;
            jediStandDown.visible = false;
            jediStandRight.visible = false;
            jediFacingInt = 1;
            leftCollision = true;
        }
        else if (jedi.x - listOfObjects[i].x <= 0 && jedi.x - listOfObjects[i].x >= -30 && Math.abs(jedi.y - listOfObjects[i].y) < 25) {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = false;
            jediStandLeft.visible = false;
            jediStandDown.visible = false;
            jediStandRight.visible = true;

            jediFacingInt = 3;
            rightCollision = true;
        }
        else if (jedi.y - listOfObjects[i].y <= 0 && jedi.y - listOfObjects[i].y >= -30 && Math.abs(jedi.x - listOfObjects[i].x) < 25) {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = false;
            jediStandLeft.visible = false;
            jediStandDown.visible = true;
            jediStandRight.visible = false;
            jediFacingInt = 0;
            bottomCollision = true;
        }
        else if (jedi.y - listOfObjects[i].y >= 0 && jedi.y - listOfObjects[i].y <= 30 && Math.abs(jedi.x - listOfObjects[i].x) < 25) {
            jediWalkUp.visible = false;
            jediWalkLeft.visible = false;
            jediWalkDown.visible = false;
            jediWalkRight.visible = false;

            jediStandUp.visible = true;
            jediStandLeft.visible = false;
            jediStandDown.visible = false;
            jediStandRight.visible = false;

            jediFacingInt = 2;
            topCollision = true;
        }
    }

    //check wall collisions
    if(jedi.y + 30 > 400 && jedi.y + 30 < 415){
        bottomCollision = true;
    }

    if(jedi.y - 30 < 400 && jedi.y - 30 > 385){
        topCollision = true;
    }

    if(jedi.x + 12 > 450 && jedi.x + 12 < 465 && jedi.y > 400){
        rightCollision = true;
    }

    if(jedi.x - 12 < 456 && jedi.x - 12 > 450 && jedi.y > 400){
        leftCollision = true;
    }

    //check door triggers
    if(jedi.x + 12 < 175 && jedi.x + 12 > 110 && jedi.y + 30 > 395 && jedi.y + 10 < 405){
        bigToLeftTrigger();
    }

    if(jedi.x + 12 < 175 && jedi.x + 12 > 110 && jedi.y - 30 < 415 && jedi.y - 10 > 395){
        leftToBigTrigger();
    }

    if(jedi.x + 12 < 885 && jedi.x + 12 > 820 && jedi.y + 30 > 395 && jedi.y + 10 < 405){
        bigToRightTrigger();
    }

    if(jedi.x + 12 < 885 && jedi.x + 12 > 820 && jedi.y - 30 < 415 && jedi.y - 10 > 395){
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

function storyArcCheck() {
    if(bartenderStoryCount === 1 && sithStoryCount === 1 && ambassadorStoryCount === 1 && bountyHunterStoryCount=== 1 && policeStoryCount ===1 && storyArcCount === 0 && deadmanStory == 1){
        exclamationText.visible = true;
        storyArcCount = 1;
    }
    if(bartenderStoryCount === 2 && sithStoryCount === 2 && ambassadorStoryCount === 2 && bountyHunterStoryCount=== 2 && policeStoryCount ===2 && storyArcCount === 1 && weaponPickedUp == true) {
        exclamationText.visible = true;
        storyArcCount = 2;
    }
    if(bartenderStoryCount === 3 && sithStoryCount === 3 && ambassadorStoryCount === 3 && bountyHunterStoryCount=== 3 && policeStoryCount === 3 && storyArcCount === 2) {
        exclamationText.visible = true;
        storyArcCount = 3;
    }
}

function storyTrigger() {
    storyArcCheck();
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
		
		else if(triggeredObject === deadManTrigger)
		{
			deadManStory();
			stage.update();
		}
    }
    else{
        stage.removeChild(displayText);
    }
}

function bigToLeftTrigger(){
    ambassadorSprite.visible = false;
    sithSprite.visible = false;
    bountyHunterSprite.visible = false;
    policeSprite.visible = false;
    bartenderSprite.visible = false;
	//murderWeapon.visible = (storyArcCount === 2) ? true : false;
    rightRoom.alpha = .9;
    leftRoom.alpha = 0;
    bigRoom.alpha = .9;
    if(storyArcCount === 1 && weaponPickedUp == false && policeStoryCount == 2){
        if(jediDisplayTextBool === false && displayTextBool === false) {
            jediTalkingHead.visible = true;
            murderWeapon.visible = true;
            jediDisplayText = new createjs.Text("*You found the murder weapon on the floor. Clumsy murderer...*", "20px Helvetica", "#FFF");
            jediDisplayText.x = 55;
            jediDisplayText.y = 670;
            stage.addChild(jediDisplayText);
            jediDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                deadmanStory++;
                murderWeapon.visible = false;
                weaponPickedUp = true;
                stage.removeChild(jediDisplayText);
                jediDisplayTextBool = false;
                jediTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 4000)
        }
    }
    jedi.y += 80;
}

function leftToBigTrigger() {
    ambassadorSprite.visible = true;
    sithSprite.visible = true;
    bountyHunterSprite.visible = true;
    policeSprite.visible = true;
    bartenderSprite.visible = true;
    rightRoom.alpha = .9;
    leftRoom.alpha = .9;
    bigRoom.alpha = 0;
    murderWeapon.visible = false;
    jedi.y -= 80;
}

function bigToRightTrigger() {
    ambassadorSprite.visible = false;
    sithSprite.visible = false;
    bountyHunterSprite.visible = false;
    policeSprite.visible = false;
    bartenderSprite.visible = false;
    rightRoom.alpha = 0;
    leftRoom.alpha = .9;
    bigRoom.alpha = .9;
    jedi.y += 80;
}

function rightToBigTrigger() {
    ambassadorSprite.visible = true;
    sithSprite.visible = true;
    bountyHunterSprite.visible = true;
    policeSprite.visible = true;
    bartenderSprite.visible = true;
    rightRoom.alpha = .9;
    leftRoom.alpha = .9;
    bigRoom.alpha = 0;
    jedi.y -= 80;
}