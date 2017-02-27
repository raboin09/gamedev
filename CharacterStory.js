function bountyHunterStory() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("Hello, I am a bounty hunter.", "15px Helvetica", "#fff");
        displayText.textAlign = "center";
        displayText.x = canvasWidth / 2;
        displayText.y = 620;
        stage.addChild(displayText);
        setInterval(function(){ stage.removeChild(displayText); displayTextBool = false; }, 1000)
        displayTextBool = true;
    }
}

function ambassadorStory() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("Hello, I am an ambassador.", "15px Helvetica", "#fff");
        displayText.textAlign = "center";
        displayText.x = canvasWidth / 2;
        displayText.y = 620;
        stage.addChild(displayText);
        setInterval(function () {
            stage.removeChild(displayText);
            displayTextBool = false;
        }, 1000)
        displayTextBool = true;
    }
}

function bartenderStory() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("Hello, I am bartender.", "15px Helvetica", "#fff");
        displayText.textAlign = "center";
        displayText.x = canvasWidth / 2;
        displayText.y = 620;
        stage.addChild(displayText);
        setInterval(function () {
            stage.removeChild(displayText);
            displayTextBool = false;
        }, 1000)
        displayTextBool = true;
    }
}

function sithStory() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("Hello, I am a Sith. Mwhahahaha!", "15px Helvetica", "#fff");
        displayText.textAlign = "center";
        displayText.x = canvasWidth / 2;
        displayText.y = 620;
        stage.addChild(displayText);
        setInterval(function () {
            stage.removeChild(displayText);
            displayTextBool = false;
        }, 1000)
        displayTextBool = true;
    }
}

function policeStory() {
    if(displayTextBool === false) {
        displayText = new createjs.Text("Hello, I am a policeman.", "15px Helvetica", "#fff");
        displayText.textAlign = "center";
        displayText.x = canvasWidth / 2;
        displayText.y = 620;
        stage.addChild(displayText);
        setInterval(function () {
            stage.removeChild(displayText);
            displayTextBool = false;
        }, 1000)
        displayTextBool = true;
    }
}