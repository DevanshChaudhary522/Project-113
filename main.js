function preload(){

}
function setup(){
  canvas = createCanvas(500,500);
  canvas.center();
  video = createCapture(VIDEO);
   video.size(150,250);
   video.position(268,210);


}
function draw(){

  c=color(250,0,0);
   fill(c);
  circle(300, 300, 40);
  circle(120, 300, 40);
  circle(300, 120, 40);
  circle(120, 120, 40);
  b=color(0,0,250);
  fill(b);
  rect(290, 135, 20, 150);
  rect(110,135, 20, 150);
  rect(135,110,150,20);
  rect(135,290,150,20);

}
