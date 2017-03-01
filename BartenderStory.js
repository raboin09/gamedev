function bartenderStory() {

    if(bartenderStoryCount === 0 && storyArcCount === 0){
        if(bartenderDisplayTextBool === false) {
            bartenderDisplayText = new createjs.Text("Hi I'm the bartender", "20px Helvetica", "#000");
            bartenderDisplayText.x = bartender.x + 15;
            bartenderDisplayText.y = bartender.y - 15;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                bartenderStoryCount++;
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(bartenderStoryCount === 1 && storyArcCount === 0){
        if(bartenderDisplayTextBool === false) {
            bartenderDisplayText = new createjs.Text("I can't be of much help at this point.", "20px Helvetica", "#000");
            bartenderDisplayText.x = bartender.x + 15;
            bartenderDisplayText.y = bartender.y - 15;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(bartenderStoryCount === 1 && storyArcCount === 1){
        if(bartenderDisplayTextBool === false) {
            bartenderDisplayText = new createjs.Text("Hi I'm the bartender AGAIN", "20px Helvetica", "#000");
            bartenderDisplayText.x = bartender.x + 15;
            bartenderDisplayText.y = bartender.y - 15;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                bartenderStoryCount++;
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(bartenderStoryCount === 2 && storyArcCount === 1){
        if(bartenderDisplayTextBool === false) {
            bartenderDisplayText = new createjs.Text("I don't have anything else to say.", "20px Helvetica", "#000");
            bartenderDisplayText.x = bartender.x + 15;
            bartenderDisplayText.y = bartender.y - 15;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(bartenderStoryCount === 2 && storyArcCount === 2){
        if(bartenderDisplayTextBool === false) {
            bartenderDisplayText = new createjs.Text("Hi I'm the bartender A THIRD TIME", "20px Helvetica", "#000");
            bartenderDisplayText.x = bartender.x + 15;
            bartenderDisplayText.y = bartender.y - 15;
            stage.addChild(bartenderDisplayText);
            bartenderDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                bartenderStoryCount++;
                stage.removeChild(bartenderDisplayText);
                bartenderDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

}