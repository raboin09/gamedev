function deadManStory() {

    if(storyArcCount === 0){
        if(jediDisplayTextBool === false && displayTextBool === false) {
            jediTalkingHead.visible = true;
            jediDisplayText = new createjs.Text("JEDI: Oh my goodness! A dead body!", "20px Helvetica", "#FFF");
            jediDisplayText.x = 55;
            jediDisplayText.y = 670;
            stage.addChild(jediDisplayText);
            jediDisplayTextBool = true;
            displayTextBool = true;
            stage.update();
            setTimeout(function() {
                stage.removeChild(jediDisplayText);
                jediDisplayTextBool = false;
                jediTalkingHead.visible = false;
                displayTextBool = false;
                stage.update();
            }, 3000)
        }
    }
}