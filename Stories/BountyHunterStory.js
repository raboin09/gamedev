function bountyHunterStory() {

    if(bountyHunterStoryCount === 0 && storyArcCount === 0){
        if(bountyHunterDisplayTextBool === false && displayTextBool === false) {
            bountyHunterTalkingHead.visible = true;
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: I didn't kill him. It's never the person you most suspect.", "20px Helvetica", "#FFF");
            bountyHunterDisplayText.x = 55;
            bountyHunterDisplayText.y = 670;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                bountyHunterStoryCount++;
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                bountyHunterTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(bountyHunterStoryCount === 1 && storyArcCount === 0){
        if(bountyHunterDisplayTextBool === false && displayTextBool === false) {
            bountyHunterTalkingHead.visible = true;
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: Leave me alone.", "20px Helvetica", "#FFF");
            bountyHunterDisplayText.x = 55;
            bountyHunterDisplayText.y = 670;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                bountyHunterTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(bountyHunterStoryCount === 1 && storyArcCount === 1){
        if(bountyHunterDisplayTextBool === false && displayTextBool === false && alibiCheck == true) {
            bountyHunterTalkingHead.visible = true;
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: Oh I was here. I saw the politician here too.", "20px Helvetica", "#FFF");
            bountyHunterDisplayText.x = 55;
            bountyHunterDisplayText.y = 670;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                bountyHunterStoryCount++;
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                bountyHunterTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(bountyHunterStoryCount === 2 && storyArcCount === 1){
        if(bountyHunterDisplayTextBool === false && displayTextBool === false) {
            bountyHunterTalkingHead.visible = true;
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: Seriously, go away.", "20px Helvetica", "#FFF");
            bountyHunterDisplayText.x = 55;
            bountyHunterDisplayText.y = 670;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                bountyHunterTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(bountyHunterStoryCount === 2 && storyArcCount === 2){
        if(bountyHunterDisplayTextBool === false && displayTextBool === false && storyAccusationPart == true) {
            bountyHunterTalkingHead.visible = true;
            primeSuspect = bountyHunter;
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: Wow, I thought Jedi were supposed to be intelligent.", "20px Helvetica", "#FFF");
            bountyHunterDisplayText.x = 55;
            bountyHunterDisplayText.y = 670;
            storyAccusationPart = false;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                bountyHunterStoryCount++;
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                bountyHunterTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
                winCheck();
            }, 3000)
        }
    }

}
