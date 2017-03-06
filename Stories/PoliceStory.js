function policeStory() {

    if(policeStoryCount === 0 && storyArcCount === 0){
        if(policeDisplayTextBool === false && displayTextBool === false) {
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: Hi I'm the police", "20px Helvetica", "#FFF");
            policeDisplayText.x = 55;
            policeDisplayText.y = 670;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                policeStoryCount++;
                stage.removeChild(policeDisplayText);
                policeTalkingHead.visible = false;
                policeDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(policeStoryCount === 1 && storyArcCount === 0){
        if(policeDisplayTextBool === false && displayTextBool === false) {
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: part 1 redirect", "20px Helvetica", "#FFF");
            policeDisplayText.x = 55;
            policeDisplayText.y = 670;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(policeDisplayText);
                policeTalkingHead.visible = false;
                policeDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }


    if(policeStoryCount === 1 && storyArcCount === 1){
        if(policeDisplayTextBool === false && displayTextBool === false) {
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: part 2 story", "20px Helvetica", "#FFF");
            policeDisplayText.x = 55;
            policeDisplayText.y = 670;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                policeStoryCount++;
                stage.removeChild(policeDisplayText);
                policeTalkingHead.visible = false;
                policeDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
    else if(policeStoryCount === 2 && storyArcCount === 1){
        if(policeDisplayTextBool === false && displayTextBool === false) {
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: part 2 redirect", "20px Helvetica", "#FFF");
            policeDisplayText.x = 55;
            policeDisplayText.y = 670;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(policeDisplayText);
                policeTalkingHead.visible = false;
                policeDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(policeStoryCount === 2 && storyArcCount === 2){
        if(policeDisplayTextBool === false && displayTextBool === false) {
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: part 3 story", "20px Helvetica", "#FFF");
            policeDisplayText.x = 55;
            policeDisplayText.y = 670;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                policeStoryCount++;
                stage.removeChild(policeDisplayText);
                policeTalkingHead.visible = false;
                policeDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

    if(policeStoryCount === 3 && storyArcCount === 2){
        if(policeDisplayTextBool === false && displayTextBool === false) {
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: part 3 redirect", "20px Helvetica", "#FFF");
            policeDisplayText.x = 55;
            policeDisplayText.y = 670;
            stage.addChild(policeDisplayText);
            policeDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(policeDisplayText);
                policeTalkingHead.visible = false;
                policeDisplayTextBool = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }

}