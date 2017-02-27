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
    bartender.y = 50;
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
    sith.x = 600;
    sith.y = 75;
    listOfObjects.push(sith);
    stage.addChild(sith);

    //Create policeTrigger and police Objects
    var policeTriggerGraphic = new createjs.Graphics();
    policeTriggerGraphic.beginStroke("black").beginFill("yellow").drawCircle(0, 0, 20);
    policeTrigger = new createjs.Shape(policeTriggerGraphic);
    policeTrigger.x = 800;
    policeTrigger.y = 325;
    listOfTriggers.push(policeTrigger);
    policeTrigger.visible = false;
    stage.addChild(policeTrigger);
    var policeGraphic = new createjs.Graphics();
    policeGraphic.beginStroke("black").beginFill("lightblue").drawCircle(0, 0, 10);
    police = new createjs.Shape(policeGraphic);
    police.x = 800;
    police.y = 325;
    listOfObjects.push(police);
    stage.addChild(police);

    var botHorizontalWall, botHorizontalWallGraphics;
    var botVerticalWall, botVerticalWallGraphics;
    botHorizontalWall = new createjs.Shape();
    botHorizontalWallGraphics = botHorizontalWall.graphics;
    botVerticalWall = new createjs.Shape();
    botVerticalWallGraphics = botVerticalWall.graphics;

    botHorizontalWallGraphics.beginFill("#000");
    botHorizontalWallGraphics.drawRect(0, 0, 950, 5);
    botHorizontalWall.width = 6;
    botHorizontalWall.height = 200;
    botHorizontalWall.x = 0;
    botHorizontalWall.y = 400;
    stage.addChild(botHorizontalWall);

    botVerticalWallGraphics.beginFill("#000");
    botVerticalWallGraphics.drawRect(0, 0, 5, 400);
    botVerticalWall.width = 6;
    botVerticalWall.height = 100;
    botVerticalWall.x = 450;
    botVerticalWall.y = 400;
    stage.addChild(botVerticalWall);

    stage.update();
}