leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('coral');
    text("Rituparna", 80, 250);
    textSize(difference);
    document.getElementById("font").innerHTML = "The font size of the text is " + difference + " pixel(s)";
}

function modelLoaded() {
    console.log("Model Loaded");
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("The Left Wrist X is " + leftWristX + "  The Right Wrist X is " + rightWristX);
        difference = floor(leftWristX - rightWristX);
        console.log("The font size of the text is " + difference + " pixel(s)");
    }
}