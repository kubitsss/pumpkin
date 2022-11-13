var canvas, stage;
var drawingCanvas;
var image;
var oldPt;
var oldMidPt;
var index;

function init() {
	canvas = document.getElementById("gameCanvas");
	index = 0;
  
	//check to see if we are running in a browser with touch support
	stage = new createjs.Stage(canvas);
	stage.autoClear = false;
	stage.enableDOMEvents(true);

  canvas.width = 1200;
  canvas.height = 675;
	createjs.Touch.enable(stage);
	createjs.Ticker.framerate = 24;
	
  drawingCanvas = new createjs.Shape();

	stage.addEventListener("stagemousedown", handleMouseDown);
	stage.addEventListener("stagemouseup", handleMouseUp);

image = new Image();
 image.onload = handleImgLoad();
 image.src = 'images/big_pumpkin.png';

  
stage.addChild(drawingCanvas);
	stage.update();

}

function handleImgLoad(){
 bitmap = new createjs.Bitmap(image);
 stage.addChild(bitmap, drawingCanvas);
}
function handleMouseDown(event) {
	if (!event.primary) { return; }
	color = "#000000"
  

	oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
	oldMidPt = oldPt.clone();
	stage.addEventListener("stagemousemove", handleMouseMove);
}

function handleMouseMove(event) {
	if (!event.primary) { return; }
	var midPt = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);

	drawingCanvas.graphics.setStrokeStyle('15', 'round', 'round').beginStroke("black").moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

	oldPt.x = stage.mouseX;
	oldPt.y = stage.mouseY;

	oldMidPt.x = midPt.x;
	oldMidPt.y = midPt.y;

	stage.update();
}

function handleMouseUp(event) {
	if (!event.primary) { return; }
	stage.removeEventListener("stagemousemove", handleMouseMove);
}
