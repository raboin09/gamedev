function ambassadorStory() {

    if(ambassadorStoryCount === 0 && storyArcCount === 0){
        if(ambassadorDisplayTextBool === false && displayTextBool === false) {
            ambassadorTalkingHead.visible = true;
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: Good day, I'm the Ambassador. I did not witness the murder.", "20px Helvetica", "#FFF");
            ambassadorDisplayText.x = 70;
            ambassadorDisplayText.y = 670;
            stage.addChild(ambassadorDisplayText);
            ambassadorDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                ambassadorStoryCount++;
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                ambassadorTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(ambassadorStoryCount === 1 && storyArcCount === 0){
        if(ambassadorDisplayTextBool === false && displayTextBool === false) {
            ambassadorTalkingHead.visible = true;
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: Leave me to my thoughts.", "20px Helvetica", "#FFF");
            ambassadorDisplayText.x = 70;
            ambassadorDisplayText.y = 670;
            stage.addChild(ambassadorDisplayText);
            ambassadorDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                ambassadorTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(ambassadorStoryCount === 1 && storyArcCount === 1){
        if(ambassadorDisplayTextBool === false && displayTextBool === false && alibiCheck == true) {
            ambassadorTalkingHead.visible = true;
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: I saw the Politician here that night.", "20px Helvetica", "#FFF");
            ambassadorDisplayText.x = 70;
            ambassadorDisplayText.y = 670;
            stage.addChild(ambassadorDisplayText);
            ambassadorDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                ambassadorStoryCount++;
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                ambassadorTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(ambassadorStoryCount === 2 && storyArcCount === 1){
        if(ambassadorDisplayTextBool === false && displayTextBool === false) {
            ambassadorTalkingHead.visible = true;
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: Go speak to the others.", "20px Helvetica", "#FFF");
            ambassadorDisplayText.x = 70;
            ambassadorDisplayText.y = 670;
            stage.addChild(ambassadorDisplayText);
            ambassadorDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                ambassadorTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(ambassadorStoryCount === 2 && storyArcCount === 2){
        if(ambassadorDisplayTextBool === false && displayTextBool === false && storyAccusationPart == true) {
            ambassadorTalkingHead.visible = true;
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: Me? I'm your primary suspect?!", "20px Helvetica", "#FFF");
            primeSuspect = ambassador;
            ambassadorDisplayText.x = 70;
            ambassadorDisplayText.y = 670;
            stage.addChild(ambassadorDisplayText);
            storyAccusationPart = false;
            ambassadorDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                ambassadorStoryCount++;
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                ambassadorTalkingHead.visible = false;
                displayTextBool = false;
                winCheck();
                stage.update();
            }, 3000)
        }
    }

}