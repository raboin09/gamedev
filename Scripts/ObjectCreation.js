function drawObjects() {
        // Create jedi object
    jediGraphic = new createjs.Graphics();
    jediGraphic.beginStroke("black").beginFill("red").drawCircle(0, 0, 10);
    jedi = new createjs.Shape(jediGraphic);
    jedi.x = jediX;
    jedi.y = jediY;
    stage.addChild(jedi);

    //Create bountyHunterTrigger and bountyHunter Objects
    var bountyHunterTriggerGraphic = new createjs.Graphics();
    bountyHunterTriggerGraphic.beginStroke("black").beginFill("yellow").drawCircle(0, 0, 20);
    bountyHunterTrigger = new createjs.Shape(bountyHunterTriggerGraphic);
    bountyHunterTrigger.x = 400;
    bountyHunterTrigger.y = 300;
    bountyHunterTrigger.visible = false;
    listOfTriggers.push(bountyHunterTrigger);
    stage.addChild(bountyHunterTrigger);
    var bountyHunterGraphic = new createjs.Graphics();
    bountyHunterGraphic.beginStroke("black").beginFill("blue").drawCircle(0, 0, 10);
    bountyHunter = new createjs.Shape(bountyHunterGraphic);
    bountyHunter.visible = false;
    bountyHunter.x = 400;
    bountyHunter.y = 300;
    listOfObjects.push(bountyHunter);
    stage.addChild(bountyHunter);

    //Create ambassadorTrigger and ambassador Objects
    var ambassadorTriggerGraphic = new createjs.Graphics();
    ambassadorTriggerGraphic.beginStroke("black").beginFill("yellow").drawCircle(0, 0, 20);
    ambassadorTrigger = new createjs.Shape(ambassadorTriggerGraphic);
    ambassadorTrigger.x = 500;
    ambassadorTrigger.y = 200;
    listOfTriggers.push(ambassadorTrigger);
    ambassadorTrigger.visible = false;
    stage.addChild(ambassadorTrigger);
    var ambassadorGraphic = new createjs.Graphics();
    ambassadorGraphic.beginStroke("black").beginFill("green").drawCircle(0, 0, 10);
    ambassador = new createjs.Shape(ambassadorGraphic);
    ambassador.visible = false;
    ambassador.x = 500;
    ambassador.y = 200;
    listOfObjects.push(ambassador);
    stage.addChild(ambassador);

    //Create bartenderTrigger and bartender Objects
    var bartenderTriggerGraphic = new createjs.Graphics();
    bartenderTriggerGraphic.beginStroke("black").beginFill("yellow").drawCircle(0, 0, 20);
    bartenderTrigger = new createjs.Shape(bartenderTriggerGraphic);
    bartenderTrigger.x = 50;
    bartenderTrigger.y = 50;
    listOfTriggers.push(bartenderTrigger);
    bartenderTrigger.visible = false;
    stage.addChild(bartenderTrigger);
    var bartenderGraphic = new createjs.Graphics();
    bartenderGraphic.beginStroke("black").beginFill("orange").drawCircle(0, 0, 10);
    bartender = new createjs.Shape(bartenderGraphic);
    bartender.x = 50;
    bartender.y = 30;
    bartender.visible = false;
    listOfObjects.push(bartender);
    stage.addChild(bartender);

    //Create sithTrigger and sith Objects
    var sithTriggerGraphic = new createjs.Graphics();
    sithTriggerGraphic.beginStroke("black").beginFill("yellow").drawCircle(0, 0, 20);
    sithTrigger = new createjs.Shape(sithTriggerGraphic);
    sithTrigger.x = 600;
    sithTrigger.y = 75;
    listOfTriggers.push(sithTrigger);
    sithTrigger.visible = false;
    stage.addChild(sithTrigger);
    var sithGraphic = new createjs.Graphics();
    sithGraphic.beginStroke("black").beginFill("grey").drawCircle(0, 0, 10);
    sith = new createjs.Shape(sithGraphic);
    sith.visible = false;
    sith.x = 600;
    sith.y = 75;
    listOfObjects.push(sith);
    stage.addChild(sith);

    //Create policeTrigger and police Objects
    var policeTriggerGraphic = new createjs.Graphics();
    policeTriggerGraphic.beginStroke("black").beginFill("yellow").drawCircle(0, 0, 20);
    policeTrigger = new createjs.Shape(policeTriggerGraphic);
    policeTrigger.x = 850;
    policeTrigger.y = 250;
    listOfTriggers.push(policeTrigger);
    policeTrigger.visible = false;
    stage.addChild(policeTrigger);
    var policeGraphic = new createjs.Graphics();
    policeGraphic.beginStroke("black").beginFill("lightblue").drawCircle(0, 0, 10);
    police = new createjs.Shape(policeGraphic);
    police.x = 850;
    police.y = 250;
    police.visible = false;
    listOfObjects.push(police);
    stage.addChild(police);

    //Door graphic
    //TODO: Door Collision and Trigger
    var bigToRightDoorGraphic = new createjs.Graphics();
    bigToRightDoorGraphic.beginStroke("black").beginFill("red").drawRect(0, 0, 55, 10);
    bigToRightDoorShape = new createjs.Shape(bigToRightDoorGraphic);
    bigToRightDoorShape.x = 810;
    bigToRightDoorShape.y = 390;
    stage.addChild(bigToRightDoorShape);

    //Door graphic
    //TODO: Door Collision and Trigger
    var rightToBigDoorGraphic = new createjs.Graphics();
    rightToBigDoorGraphic.beginStroke("black").beginFill("red").drawRect(0, 0, 55, 10);
    rightToBigDoorShape = new createjs.Shape(rightToBigDoorGraphic);
    rightToBigDoorShape.x = 810;
    rightToBigDoorShape.y = 404;
    stage.addChild(rightToBigDoorShape);

    //Door graphic
    //TODO: Door Collision and Trigger
    var bigToLeftDoorGraphic = new createjs.Graphics();
    bigToLeftDoorGraphic.beginStroke("black").beginFill("red").drawRect(0, 0, 55, 10);
    bigToLeftDoorShape = new createjs.Shape(bigToLeftDoorGraphic);
    bigToLeftDoorShape.x = 100;
    bigToLeftDoorShape.y = 390;
    stage.addChild(bigToLeftDoorShape);

    //Door graphic
    //TODO: Door Collision and Trigger
    var leftToBigDoorGraphic = new createjs.Graphics();
    leftToBigDoorGraphic.beginStroke("black").beginFill("red").drawRect(0, 0, 55, 10);
    leftToBigDoorShape = new createjs.Shape(leftToBigDoorGraphic);
    leftToBigDoorShape.x = 100;
    leftToBigDoorShape.y = 404;
    stage.addChild(leftToBigDoorShape);

	//Big room graphic with adjustable alpha
	var bigRoomGraphic = new createjs.Graphics();
    bigRoomGraphic.beginStroke("black").beginFill("black").drawRect(0, 0, 950, 400);
    bigRoom = new createjs.Shape(bigRoomGraphic);
	bigRoom.alpha = 0;
    bigRoom.x = 0;
	bigRoom.y = 0;
    stage.addChild(bigRoom);

	//Left room graphic with adjustable alpha
	var leftRoomGraphic = new createjs.Graphics();
    leftRoomGraphic.beginStroke("black").beginFill("black").drawRect(0, 0, 450, 250);
    leftRoom = new createjs.Shape(leftRoomGraphic);
	leftRoom.alpha = .9;
    leftRoom.x = 0;
    leftRoom.y = 400;
    stage.addChild(leftRoom);

	//Right room graphic with adjustable alpha
	var rightRoomGraphic = new createjs.Graphics();
    rightRoomGraphic.beginStroke("black").beginFill("black").drawRect(0, 0, 500, 250);
    rightRoom = new createjs.Shape(rightRoomGraphic);
	rightRoom.alpha = .9;
    rightRoom.x = 450;
    rightRoom.y = 400;
    stage.addChild(rightRoom);

    //dialogueBox creation
    var dialogueBoxGraphic = new createjs.Graphics();
    dialogueBoxGraphic.beginStroke("d3d3d3").beginFill("#000").drawRect(0, 0, 950, 100);
    dialogueBox = new createjs.Shape(dialogueBoxGraphic);
    dialogueBox.alpha = 1;
    dialogueBox.x = 0;
    dialogueBox.y = 650;
    stage.addChild(dialogueBox);

    //bartender graphics
    bartenderTalkingHead = new createjs.Bitmap('img/bartenderHead.png');
    bartenderTalkingHead.x = 5;
    bartenderTalkingHead.y = 655;
    bartenderTalkingHead.visible = false;
    stage.addChild(bartenderTalkingHead);

    bartenderSprite = new createjs.Bitmap('img/bartender.png');
    bartenderSprite.x = bartender.x - 20;
    bartenderSprite.y = bartender.y - 30;
    bartenderSprite.visible = true;
    stage.addChild(bartenderSprite);

    bountyHunterSprite = new createjs.Bitmap('img/bountyHunter.png');
    bountyHunterSprite.x = bountyHunter.x - 20;
    bountyHunterSprite.y = bountyHunter.y - 30;
    bountyHunterSprite.visible = true;
    stage.addChild(bountyHunterSprite);

    //bartender talking head
    bountyHunterTalkingHead = new createjs.Bitmap('img/bountyHunterHead.png');
    bountyHunterTalkingHead.x = 5;
    bountyHunterTalkingHead.y = 655;
    bountyHunterTalkingHead.visible = false;
    stage.addChild(bountyHunterTalkingHead);

    ambassadorSprite = new createjs.Bitmap('img/ambassador.png');
    ambassadorSprite.x = ambassador.x - 30;
    ambassadorSprite.y = ambassador.y - 30;
    ambassadorSprite.visible = true;
    stage.addChild(ambassadorSprite);

    ambassadorTalkingHead = new createjs.Bitmap('img/ambassadorHead.png');
    ambassadorTalkingHead.x = 5;
    ambassadorTalkingHead.y = 655;
    ambassadorTalkingHead.visible = false;
    stage.addChild(ambassadorTalkingHead);

    sithSprite = new createjs.Bitmap('img/sith.png');
    sithSprite.x = sith.x - 30;
    sithSprite.y = sith.y - 30;
    sithSprite.visible = true;
    stage.addChild(sithSprite);

    sithTalkingHead = new createjs.Bitmap('img/sithHead.png');
    sithTalkingHead.x = 5;
    sithTalkingHead.y = 655;
    sithTalkingHead.visible = false;
    stage.addChild(sithTalkingHead);

    policeSprite = new createjs.Bitmap('img/police.png');
    policeSprite.x = police.x - 20;
    policeSprite.y = police.y - 30;
    policeSprite.visible = true;
    stage.addChild(policeSprite);

    policeTalkingHead = new createjs.Bitmap('img/policeHead.png');
    policeTalkingHead.x = 5;
    policeTalkingHead.y = 655;
    policeTalkingHead.visible = false;
    stage.addChild(policeTalkingHead);

    var botHorizontalWall, botHorizontalWallGraphics;
    var botVerticalWall, botVerticalWallGraphics;
    botHorizontalWall = new createjs.Shape();
    botHorizontalWallGraphics = botHorizontalWall.graphics;
    botVerticalWall = new createjs.Shape();
    botVerticalWall.visible = false;
    botVerticalWallGraphics = botVerticalWall.graphics;

    botHorizontalWallGraphics.beginFill("#000");
    botHorizontalWallGraphics.drawRect(0, 0, 950, 5);
    botHorizontalWall.x = 0;
    botHorizontalWall.y = 400;
    botHorizontalWall.visible = false;
    stage.addChild(botHorizontalWall);

    botVerticalWallGraphics.beginFill("#000");
    botVerticalWallGraphics.drawRect(0, 0, 5, 250);
    botVerticalWall.x = 450;
    botVerticalWall.y = 400;
    stage.addChild(botVerticalWall);

    stage.update();
}