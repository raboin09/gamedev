function ambassadorStory() {

    if(ambassadorStoryCount === 0 && storyArcCount === 0){
        if(ambassadorDisplayTextBool === false && displayTextBool === false) {
            ambassadorTalkingHead.visible = true;
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: Hi I'm the ambassador", "20px Helvetica", "#FFF");
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
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: insert part 1 redirect", "20px Helvetica", "#FFF");
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
        if(ambassadorDisplayTextBool === false && displayTextBool === false) {
            ambassadorTalkingHead.visible = true;
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: insert part 2 story", "20px Helvetica", "#FFF");
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
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: insert part 2 redirect", "20px Helvetica", "#FFF");
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
        if(ambassadorDisplayTextBool === false && displayTextBool === false) {
            ambassadorTalkingHead.visible = true;
            ambassadorDisplayText = new createjs.Text("AMBASSADOR: insert part 3 story", "20px Helvetica", "#FFF");
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

}