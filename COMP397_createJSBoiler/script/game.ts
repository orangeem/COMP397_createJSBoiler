// create Js Boilerplate for COMP 397

// variables --------------------------------
var canvas;
var stage: createjs.Stage;
var helloText: createjs.Text; 
var buttonBitmap: createjs.Bitmap;

// functions --------------------------------
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // turn on mouse event
    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps.
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

//game loop
function gameLoop() {
    stage.update();
}

function buttonClicked() {
    helloText.text = "Goodbye!";
}

function buttonOut() {
    buttonBitmap.alpha = 1;
}

function buttonOver() {
    buttonBitmap.alpha = 0.5;
}

function main() {
    //This is where all the work happens
    helloText = new createjs.Text("Hello world", "40px Consolas", "#000000");
    stage.addChild(helloText); // First child Object that we add to the stage
    buttonBitmap = new createjs.Bitmap("assets/images/button.jpg");

    buttonBitmap.x = 100;
    buttonBitmap.y = 100;
    buttonBitmap.addEventListener("click", buttonClicked);
    buttonBitmap.addEventListener("mouseout", buttonOut);
    buttonBitmap.addEventListener("mouseover", buttonOver);
    stage.addChild(buttonBitmap);

    
}

