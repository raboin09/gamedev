function bartenderStory() {

    if(bartenderStoryCount === 0 && storyArcCount === 0){
        if(bartenderDisplayTextBool === false && displayTextBool === false) {
            bartenderTalkingHead.visible = true;
            bartenderDisplayText = new createjs.Text("BARTENDER: Hello, I was the bartender here the night of the murderer. I assure you, I didn't kill him.", "20px Helvetica", "#FFF");
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
            }, 4000)
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
        if(bartenderDisplayTextBool === false && displayTextBool === false && alibiCheck == true) {
            bartenderTalkingHead.visible = true;
            bartenderDisplayText = new createjs.Text("BARTENDER: The politician said he was at home? No no no, he was here skulking\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t around before the murder.", "20px Helvetica", "#FFF");
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
            }, 5000)
        }
    }
    else if(bartenderStoryCount === 2 && storyArcCount === 1){
        if(bartenderDisplayTextBool === false && displayTextBool === false) {
            bartenderTalkingHead.visible = true;
            bartenderDisplayText = new createjs.Text("BARTENDER: That's all I have to say.", "20px Helvetica", "#FFF");
            bartenderDisplayText.x = 55;
            bartenderDisplayText.y = 670;
            storyAccusationPart = false;
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
        if(bartenderDisplayTextBool === false && displayTextBool === false && storyAccusationPart == true) {
            bartenderTalkingHead.visible = true;
            primeSuspect = bartender;
            bartenderDisplayText = new createjs.Text("BARTENDER: Yeah...sure I'M the murderer. Not the blatant sith over there...", "20px Helvetica", "#FFF");
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
                winCheck();
                stage.update();
            }, 4000)
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
                winCheck();
            }, 3000)
        }
    }

}