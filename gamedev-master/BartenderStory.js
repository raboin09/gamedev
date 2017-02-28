function bartenderPart1() {
    displayText = new createjs.Text("Hi, I'm the bartender.", "15px Helvetica", "#fff");
    displayText.x = bartender.x + 15;
    displayText.y = bartender.y - 15;
    stage.addChild(displayText);
    displayText = true;
    displayTextBool = true;

}