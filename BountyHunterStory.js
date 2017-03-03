function bountyHunterStory() {

    if(bountyHunterStoryCount === 0 && storyArcCount === 0){
        if(bountyHunterDisplayTextBool === false && displayTextBool === false) {
            bountyHunterTalkingHead.visible = true;
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: Hi I'm the Bounty Hunter", "20px Helvetica", "#FFF");
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
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: part 1 redirect", "20px Helvetica", "#FFF");
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
        if(bountyHunterDisplayTextBool === false && displayTextBool === false) {
            bountyHunterTalkingHead.visible = true;
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: part 2 story", "20px Helvetica", "#FFF");
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
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: part 2 redirect", "20px Helvetica", "#FFF");
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
        if(bountyHunterDisplayTextBool === false && displayTextBool === false) {
            bountyHunterTalkingHead.visible = true;
            bountyHunterDisplayText = new createjs.Text("BOUNTY HUNTER: part 3", "20px Helvetica", "#FFF");
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

}
