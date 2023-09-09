function setup(){
canvas=createCanvas(400,600)
canvas.center()
createCapture(VIDEO)
video.hide()
}

function start(){
objectDetector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="status:detecting objects"
}

function modelloaded(){
console.log("model has been loaded");
}

function draw(){
image(video,0,0,640,420)
}