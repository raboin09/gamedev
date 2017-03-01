function bountyHunterStory() {

    if(bountyHunterStoryCount === 0 && storyArcCount === 0){
        if(bountyHunterDisplayTextBool === false) {
            bountyHunterDisplayText = new createjs.Text("Hi I'm the bountyHunter", "20px Helvetica", "#000");
            bountyHunterDisplayText.x = bountyHunter.x + 15;
            bountyHunterDisplayText.y = bountyHunter.y - 15;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                bountyHunterStoryCount++;
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(bountyHunterStoryCount === 1 && storyArcCount === 0){
        if(bountyHunterDisplayTextBool === false) {
            bountyHunterDisplayText = new createjs.Text("I can't be of much help at this point.", "20px Helvetica", "#000");
            bountyHunterDisplayText.x = bountyHunter.x + 15;
            bountyHunterDisplayText.y = bountyHunter.y - 15;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(bountyHunterStoryCount === 1 && storyArcCount === 1){
        if(bountyHunterDisplayTextBool === false) {
            bountyHunterDisplayText = new createjs.Text("Hi I'm the bountyHunter AGAIN", "20px Helvetica", "#000");
            bountyHunterDisplayText.x = bountyHunter.x + 15;
            bountyHunterDisplayText.y = bountyHunter.y - 15;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                bountyHunterStoryCount++;
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(bountyHunterStoryCount === 2 && storyArcCount === 1){
        if(bountyHunterDisplayTextBool === false) {
            bountyHunterDisplayText = new createjs.Text("I don't have anything else to say.", "20px Helvetica", "#000");
            bountyHunterDisplayText.x = bountyHunter.x + 15;
            bountyHunterDisplayText.y = bountyHunter.y - 15;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(bountyHunterStoryCount === 2 && storyArcCount === 2){
        if(bountyHunterDisplayTextBool === false) {
            bountyHunterDisplayText = new createjs.Text("Hi I'm the bountyHunter A THIRD TIME", "20px Helvetica", "#000");
            bountyHunterDisplayText.x = bountyHunter.x + 15;
            bountyHunterDisplayText.y = bountyHunter.y - 15;
            stage.addChild(bountyHunterDisplayText);
            bountyHunterDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                bountyHunterStoryCount++;
                stage.removeChild(bountyHunterDisplayText);
                bountyHunterDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

}
