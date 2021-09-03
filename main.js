function preload() {
}

function setup() {
    canvas = createCanvas(500, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("x coordinates of nose = " + results[0].pose.nose.x);
        console.log("x coordinates of nose = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video,0,0,500,350);
    
}

function take_snapshot() {
}
