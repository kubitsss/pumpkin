var canvas, stage;
var drawingCanvas;
var image;
var oldPt;
var oldMidPt;
var index;



function init() {
	canvas = document.getElementById("gameCanvas");
	index = 0;
  image = canvas.toDataURL();
// Create a link
var aDownloadLink = document.createElement('a');
// Add the name of the file to the link
aDownloadLink.download = 'canvas_image.png';
// Attach the data to the link
aDownloadLink.href = image;
// Get the code to click the download link

	//check to see if we are running in a browser with touch support
	stage = new createjs.Stage(canvas);
	//stage.autoClear = false;
	stage.enableDOMEvents(true);

  canvas.width = 1200;
  canvas.height = 675;
	createjs.Touch.enable(stage);
	createjs.Ticker.framerate = 24;

  title = new createjs.Text("Click and drag \nto carve a pumpkin", "36px Arial", "#777777", );
	title.x = 400;
	title.y = 300;
	stage.addChild(title);

  image = new Image();
 image.src = 'images/big_pumpkin.png';
 bitmap = new createjs.Bitmap(image);
 stage.addChild(bitmap, drawingCanvas);
  stage.update();
  drawingCanvas = new createjs.Shape();

	stage.addEventListener("stagemousedown", handleMouseDown);
	stage.addEventListener("stagemouseup", handleMouseUp);


  
stage.addChild(drawingCanvas);
	stage.update();

  
}

function handleImgLoad(){
 
}
function handleMouseDown(event) {
	//if (!event.primary) { return; }
	//color = "#000000"

  

	oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
	oldMidPt = oldPt.clone();
	stage.addEventListener("stagemousemove", handleMouseMove);
}

function handleMouseMove(event) {
	//if (!event.primary) { return; }
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




