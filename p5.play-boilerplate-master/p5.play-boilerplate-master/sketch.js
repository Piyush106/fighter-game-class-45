var hero,heroImg,vill,villImg,bg;



function preload(){
  bg=loadImage("bg.jpg");
herostanding=loadImage("hero5.png");
thanosstanding=loadImage("thanos2.png");
thanosp=loadAnimation("thanos1.png","thanos5.png","thanos3.png");
thanosj=loadAnimation("thanos6.png","thanos7.png");
thanosb=loadImage("thanos4.png");

}

function setup() {
  createCanvas(1600,750);
  hero=createSprite(200,600);
  hero.addImage(herostanding);
  hero.scale=2;

 thanos=createSprite(1200,600);
 thanos.addImage(thanosstanding);
 thanos.scale=1.3;


}

function draw() {
  background(bg);  
  drawSprites();
}