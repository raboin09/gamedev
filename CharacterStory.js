function bountyHunterDialogue() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("What do you want now?", "15px Helvetica", "#fff");
        displayText.x = bountyHunter.x + 15;
        displayText.y = bountyHunter.y - 15;
        stage.addChild(displayText);
        setInterval(function(){ stage.removeChild(displayText); displayTextBool = false; }, 1000)
        displayTextBool = true;
    }
}

function ambassadorDialogue() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("Yes, what do you need?", "15px Helvetica", "#fff");
        displayText.x = ambassador.x + 15;
        displayText.y = ambassador.y - 15;
        stage.addChild(displayText);
        setInterval(function () {
            stage.removeChild(displayText);
            displayTextBool = false;
        }, 1000)
        displayTextBool = true;
    }
}

function bartenderDialogue() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("What can I do for you?", "15px Helvetica", "#fff");
        displayText.x = bartender.x + 15;
        displayText.y = bartender.y - 15;
        stage.addChild(displayText);
        setInterval(function () {
            stage.removeChild(displayText);
            displayTextBool = false;
        }, 1000)
        displayTextBool = true;
    }
}

function sithDialogue() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("How can I be of assistance?", "15px Helvetica", "#fff");
        displayText.x = sith.x + 15;
        displayText.y = sith.y - 15;
        stage.addChild(displayText);
        setInterval(function () {
            stage.removeChild(displayText);
            displayTextBool = false;
        }, 1000)
        displayTextBool = true;
    }
}

function policeDialogue() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("Yes, what is it?", "15px Helvetica", "#fff");
        displayText.x = police.x + 15;
        displayText.y = police.y - 15;
        stage.addChild(displayText);
        setInterval(function () {
            stage.removeChild(displayText);
            displayTextBool = false;
        }, 1000)
        displayTextBool = true;
    }
}