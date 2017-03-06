function sithStory() {

    if(sithStoryCount === 0 && storyArcCount === 0 && storyAccusationPart == false){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: Good day, Jedi, I am the Politician. Where was I the night of the murder? \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI was at home enjoying a bath when the victim was killed.", "20px Helvetica", "#FFF");
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
            }, 5000)
        }
    }

    else if(sithStoryCount === 1 && storyArcCount === 0 && storyAccusationPart == false){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: That's all I can recall at the moment. You should go speak to the others.", "20px Helvetica", "#FFF");
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


    if(sithStoryCount === 1 && storyArcCount === 1 && storyAccusationPart == false && alibiCheck == true){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: The victim had a gash across his chest? Grisly murder, indeed.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Oh really? The bartender saw me at the bar the night of the murder?  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThis is absurd. I didn't kill the victim.", "20px Helvetica", "#FFF");
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
            }, 7000)
        }
    }
    else if(sithStoryCount === 2 && storyArcCount === 1 && storyAccusationPart == false){
        if(sithDisplayTextBool === false && displayTextBool === false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: I don't know anything else about the murder.", "20px Helvetica", "#FFF");
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
        if(sithDisplayTextBool === false && displayTextBool === false && storyAccusationPart == true) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: You've found me out. I'm the murderer. My name is Darth Politician.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tI would've gotten away with it if it weren't for that silly bartender.", "20px Helvetica", "#FFF");
            sithDisplayText.x = 55;
            primeSuspect = sith;
            storyAccusationPart = false;
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
                winCheck();
            }, 5000)
        }
    }

    if(sithStoryCount === 3 && storyArcCount === 2){
        if(sithDisplayTextBool === false && displayTextBool === false && storyAccusationPart == false) {
            sithTalkingHead.visible = true;
            sithDisplayText = new createjs.Text("POLITICIAN: Worry less about me and more about these other peasants.", "20px Helvetica", "#FFF");
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
                winCheck();
            }, 3000)
        }
    }

}