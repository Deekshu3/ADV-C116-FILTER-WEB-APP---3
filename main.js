mustacheX=0;
mustacheY=0;
function preload()
{
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    
    camera = createCapture(VIDEO);
    camera.size(300,300);
    camera.hide();

    posen= ml5.poseNet(camera,modelLoaded);
    posen.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model loaded");
    
 }
 
 function gotPoses(results)
 {
     if(results.length >0){
         console.log(results);
         console.log("nosex : "+noseX);
         mustacheX=results[0].pose.nose.x-30;
         console.log("nosey = " +noseY);
         mustacheY=results[0].pose.nose.y;
     }
 
 }
 
function draw()
{
    image(camera,0,0,300,300);
    image(mustache,mustacheX,mustacheY,60,45);
}

function save_pic(){
    save('mypicture_png');
}