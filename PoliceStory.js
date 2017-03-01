function policeStory() {

    if(policeStoryCount === 0 && storyArcCount === 0){
        if(policeDisplayTextBool === false) {
            policeDisplayText = new createjs.Text("Hi I'm the police", "20px Helvetica", "#000");
            policeDisplayText.x = police.x + 15;
            policeDisplayText.y = police.y - 15;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                policeStoryCount++;
                stage.removeChild(policeDisplayText);
                policeDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(policeStoryCount === 1 && storyArcCount === 0){
        if(policeDisplayTextBool === false) {
            policeDisplayText = new createjs.Text("I can't be of much help at this point.", "20px Helvetica", "#000");
            policeDisplayText.x = police.x + 15;
            policeDisplayText.y = police.y - 15;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(policeDisplayText);
                policeDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(policeStoryCount === 1 && storyArcCount === 1){
        if(policeDisplayTextBool === false) {
            policeDisplayText = new createjs.Text("Hi I'm the police AGAIN", "20px Helvetica", "#000");
            policeDisplayText.x = police.x + 15;
            policeDisplayText.y = police.y - 15;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                policeStoryCount++;
                stage.removeChild(policeDisplayText);
                policeDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(policeStoryCount === 2 && storyArcCount === 1){
        if(policeDisplayTextBool === false) {
            policeDisplayText = new createjs.Text("I don't have anything else to say.", "20px Helvetica", "#000");
            policeDisplayText.x = police.x + 15;
            policeDisplayText.y = police.y - 15;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(policeDisplayText);
                policeDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(policeStoryCount === 2 && storyArcCount === 2){
        if(policeDisplayTextBool === false) {
            policeDisplayText = new createjs.Text("Hi I'm the police A THIRD TIME", "20px Helvetica", "#000");
            policeDisplayText.x = police.x + 15;
            policeDisplayText.y = police.y - 15;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            stage.update();
            setTimeout(function() {
                policeStoryCount++;
                stage.removeChild(policeDisplayText);
                policeDisplayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

}