function sithStory() {

    if(sithStoryCount === 0 && storyArcCount === 0){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: Hi I'm the sith", "20px Helvetica", "#FFF");
            sithDisplayText.x = 55;
            sithDisplayText.y = 670;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                sithStoryCount++;
                stage.removeChild(sithDisplayText);
                sithTalkingHead.visible = false;
                sithDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    else if(sithStoryCount === 1 && storyArcCount === 0){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: part 1 redirect", "20px Helvetica", "#FFF");
            sithDisplayText.x = 55;
            sithDisplayText.y = 670;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(sithDisplayText);
                sithTalkingHead.visible = false;
                sithDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(sithStoryCount === 1 && storyArcCount === 1){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: part 2 story", "20px Helvetica", "#FFF");
            sithDisplayText.x = 55;
            sithDisplayText.y = 670;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                sithStoryCount++;
                stage.removeChild(sithDisplayText);
                sithTalkingHead.visible = false;
                sithDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(sithStoryCount === 2 && storyArcCount === 1){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: part 2 redirect", "20px Helvetica", "#FFF");
            sithDisplayText.x = 55;
            sithDisplayText.y = 670;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(sithDisplayText);
                sithTalkingHead.visible = false;
                sithDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(sithStoryCount === 2 && storyArcCount === 2){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: part 3 story", "20px Helvetica", "#FFF");
            sithDisplayText.x = 55;
            sithDisplayText.y = 670;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                sithStoryCount++;
                stage.removeChild(sithDisplayText);
                sithTalkingHead.visible = false;
                sithDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(sithStoryCount === 3 && storyArcCount === 2){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: part 3 redirect", "20px Helvetica", "#FFF");
            sithDisplayText.x = 55;
            sithDisplayText.y = 670;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(sithDisplayText);
                sithTalkingHead.visible = false;
                sithDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

}