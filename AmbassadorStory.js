function ambassadorStory() {

    if(ambassadorStoryCount === 0 && storyArcCount === 0){
        if(ambassadorDisplayTextBool === false) {
            ambassadorDisplayText = new createjs.Text("Hi I'm the ambassador", "20px Helvetica", "#000");
            ambassadorDisplayText.x = ambassador.x + 15;
            ambassadorDisplayText.y = ambassador.y - 15;
            stage.addChild(ambassadorDisplayText);
            ambassadorDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                ambassadorStoryCount++;
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(ambassadorStoryCount === 1 && storyArcCount === 0){
        if(ambassadorDisplayTextBool === false) {
            ambassadorDisplayText = new createjs.Text("I can't be of much help at this point.", "20px Helvetica", "#000");
            ambassadorDisplayText.x = ambassador.x + 15;
            ambassadorDisplayText.y = ambassador.y - 15;
            stage.addChild(ambassadorDisplayText);
            ambassadorDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(ambassadorStoryCount === 1 && storyArcCount === 1){
        if(ambassadorDisplayTextBool === false) {
            ambassadorDisplayText = new createjs.Text("Hi I'm the ambassador AGAIN", "20px Helvetica", "#000");
            ambassadorDisplayText.x = ambassador.x + 15;
            ambassadorDisplayText.y = ambassador.y - 15;
            stage.addChild(ambassadorDisplayText);
            ambassadorDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                ambassadorStoryCount++;
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(ambassadorStoryCount === 2 && storyArcCount === 1){
        if(ambassadorDisplayTextBool === false) {
            ambassadorDisplayText = new createjs.Text("I don't have anything else to say.", "20px Helvetica", "#000");
            ambassadorDisplayText.x = ambassador.x + 15;
            ambassadorDisplayText.y = ambassador.y - 15;
            stage.addChild(ambassadorDisplayText);
            ambassadorDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(ambassadorStoryCount === 2 && storyArcCount === 2){
        if(ambassadorDisplayTextBool === false) {
            ambassadorDisplayText = new createjs.Text("Hi I'm the ambassador A THIRD TIME", "20px Helvetica", "#000");
            ambassadorDisplayText.x = ambassador.x + 15;
            ambassadorDisplayText.y = ambassador.y - 15;
            stage.addChild(ambassadorDisplayText);
            ambassadorDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                ambassadorStoryCount++;
                stage.removeChild(ambassadorDisplayText);
                ambassadorDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

}