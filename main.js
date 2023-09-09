gokuX=0;
gokuY=0;
function preload(){
    goku=loadImage('https://i.postimg.cc/JnCVnq1T/goku-removebg-preview.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet está inicializado');
}
function gotPoses(result)
{
    if(result.length>0)
    {
    console.log(result);
    gokuX=result[0].pose.nose.x - 65;
    gokuY=result[0].pose.nose.y - 150;
    console.log("nose x = " + gokuX);
    console.log("nose y = " + gokuY);
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(goku, gokuX, gokuY, 130, 130)
}
function take_snapshot(){
    save('goku.png');
}