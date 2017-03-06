function bartenderStory() {

    if(bartenderStoryCount === 0 && storyArcCount === 0){
        if(bartenderDisplayTextBool === false && displayTextBool === false) {
            bartenderTalkingHead.visible = true;
            bartenderDisplayText = new createjs.Text("BARTENDER: Hi I'm the bartender", "20px Helvetica", "#FFF");
            bartenderDisplayText.x = 55;
            bartenderDisplayText.y = 670;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                bartenderStoryCount++;
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                bartenderTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 2000)
        }
    }
    else if(bartenderStoryCount === 1 && storyArcCount === 0){
        if(bartenderDisplayTextBool === false && displayTextBool === false) {
            bartenderTalkingHead.visible = true;
            bartenderDisplayText = new createjs.Text("BARTENDER: I'm sorry, I don't have much more to say. Try talking to the others.", "20px Helvetica", "#FFF");
            bartenderDisplayText.x = 55;
            bartenderDisplayText.y = 670;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                bartenderTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(bartenderStoryCount === 1 && storyArcCount === 1){
        if(bartenderDisplayTextBool === false && displayTextBool === false) {
            bartenderTalkingHead.visible = true;
            bartenderDisplayText = new createjs.Text("BARTENDER: insert story part 2", "20px Helvetica", "#FFF");
            bartenderDisplayText.x = 55;
            bartenderDisplayText.y = 670;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                bartenderStoryCount++;
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                bartenderTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(bartenderStoryCount === 2 && storyArcCount === 1){
        if(bartenderDisplayTextBool === false && displayTextBool === false) {
            bartenderTalkingHead.visible = true;
            bartenderDisplayText = new createjs.Text("BARTENDER: insert part 2 redirect", "20px Helvetica", "#FFF");
            bartenderDisplayText.x = 55;
            bartenderDisplayText.y = 670;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                bartenderTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(bartenderStoryCount === 2 && storyArcCount === 2){
        if(bartenderDisplayTextBool === false && displayTextBool === false) {
            bartenderTalkingHead.visible = true;
            bartenderDisplayText = new createjs.Text("BARTENDER: insert story part 3.", "20px Helvetica", "#FFF");
            bartenderDisplayText.x = 55;
            bartenderDisplayText.y = 670;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                bartenderStoryCount++;
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                bartenderTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(bartenderStoryCount === 3 && storyArcCount === 2){
        if(bartenderDisplayTextBool === false && displayTextBool === false) {
            bartenderTalkingHead.visible = true;
            bartenderDisplayText = new createjs.Text("BARTENDER: insert part 3 redirect.", "20px Helvetica", "#FFF");
            bartenderDisplayText.x = 55;
            bartenderDisplayText.y = 670;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                bartenderStoryCount++;
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                bartenderTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

}