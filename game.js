window.addEventListener("load", function() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //var
  let painting = false;
  var b = canvas.getBoundingClientRect();
 
  
  ctx.canvas.width = 1280;
  ctx.canvas.height = 720;
  function startPos(){
    painting = true;
  }

  function finishedPos(){
    painting = false;
  }

  function draw(e){
    if(!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";


    ctx.lineTo(e.x, e.y);
    ctx.stroke();
  } 

  //eventListeners
  canvas.addEventListener("mousedown", startPos);
  canvas.addEventListener("mouseup", finishedPos);
  canvas.addEventListener("mousemove", draw);
  
});