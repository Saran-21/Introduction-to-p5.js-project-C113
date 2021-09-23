function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    //background(220);
    image(video,150,125,200,200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,30);
    circle(450,50,30);
    circle(50,400,30);
    circle(450,400,30);
    fill(0,0,255);
    rect(60,40,380,20)
    rect(60,390,380,20)
    rect(40,40,20,380)
    rect(440,40,20,380)
  }
function take_snapshot(){
    save("BirthdayPics.png");
}
