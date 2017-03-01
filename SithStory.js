function sithStory() {

    if(sithStoryCount === 0 && storyArcCount === 0){
        if(sithDisplayTextBool === false) {
            sithDisplayText = new createjs.Text("Hi I'm the sith", "20px Helvetica", "#000");
            sithDisplayText.x = sith.x + 15;
            sithDisplayText.y = sith.y - 15;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                sithStoryCount++;
                stage.removeChild(sithDisplayText);
                sithDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(sithStoryCount === 1 && storyArcCount === 0){
        if(sithDisplayTextBool === false) {
            sithDisplayText = new createjs.Text("I can't be of much help at this point.", "20px Helvetica", "#000");
            sithDisplayText.x = sith.x + 15;
            sithDisplayText.y = sith.y - 15;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(sithDisplayText);
                sithDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(sithStoryCount === 1 && storyArcCount === 1){
        if(sithDisplayTextBool === false) {
            sithDisplayText = new createjs.Text("Hi I'm the sith AGAIN", "20px Helvetica", "#000");
            sithDisplayText.x = sith.x + 15;
            sithDisplayText.y = sith.y - 15;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                sithStoryCount++;
                stage.removeChild(sithDisplayText);
                sithDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(sithStoryCount === 2 && storyArcCount === 1){
        if(sithDisplayTextBool === false) {
            sithDisplayText = new createjs.Text("I don't have anything else to say.", "20px Helvetica", "#000");
            sithDisplayText.x = sith.x + 15;
            sithDisplayText.y = sith.y - 15;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(sithDisplayText);
                sithDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(sithStoryCount === 2 && storyArcCount === 2){
        if(sithDisplayTextBool === false) {
            sithDisplayText = new createjs.Text("Hi I'm the sith A THIRD TIME", "20px Helvetica", "#000");
            sithDisplayText.x = sith.x + 15;
            sithDisplayText.y = sith.y - 15;
            stage.addChild(sithDisplayText);
            sithDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                sithStoryCount++;
                stage.removeChild(sithDisplayText);
                sithDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

}