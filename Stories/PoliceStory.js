function policeStory() {

    if(policeStoryCount === 0 && storyArcCount == -1){
        if(policeDisplayTextBool === false && displayTextBool === false) {
            exclamationText.visible = false;
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: Greetings, Jedi. I'm the officer assigned to the case.  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYou should probably investigate all the suspects to start with.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t The body is in the room below me.", "20px Helvetica", "#FFF");
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
                storyArcCount = 0;
            }, 6000)
        }
    }
    else if(policeStoryCount === 1 && storyArcCount === 0){
        if(policeDisplayTextBool === false && displayTextBool === false) {
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: You still have to question some suspects and investigate the body.", "20px Helvetica", "#FFF");
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
            exclamationText.visible = false;
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: Hmm we are no closer to finding the murderer. Try finding\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t inconsistencies in their alibis. Also check the other room for clues.", "20px Helvetica", "#FFF");
            policeDisplayText.x = 55;
            alibiCheck = true;
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
            policeDisplayText = new createjs.Text("POLICE: You still have more alibis to crosscheck.", "20px Helvetica", "#FFF");
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
            exclamationText.visible = false;
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: This investigation is nearly over. Go to the suspect you believe is the murderer.", "20px Helvetica", "#FFF");
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
                storyAccusationPart = true;
                stage.update();
            }, 3000)
        }
    }

    if(policeStoryCount === 3 && storyArcCount === 2){
        if(policeDisplayTextBool === false && displayTextBool === false) {
            policeTalkingHead.visible = true;
            policeDisplayText = new createjs.Text("POLICE: Go on, apprehend the criminal.", "20px Helvetica", "#FFF");
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