const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var immunity, covid;
var slingshot;
var immunityImage, covidImage, slingShotImage, backGround;

function preload(){
//slingShotImage=loadImage("images/slingshot.png");
immunityImage=loadImage("images/immunity.png");
covidImage=loadImage("images/covid.png");
backGround=loadImage("images/bg.jpeg")
}

function setup(){
createCanvas(1200,800);
slingshot = new Slingshot(immunity.body,{x:600, y:400});
// slingShot=createSprite(600,400);
// slingShot.addImage(slingShotImage);
// slingShot.scale=0.9;

// immunity=createSprite(600,400);
// immunity.addImage(immunityImage);
// immunity.scale=0.2;
// console.log(immunity.depth);
}

function draw(){
    background(backGround);
    // immunity.setCollider("circle",0,0,1000);
    // immunity.debug = true

    // immunity.display();
    // slingShot.display();
    spawnCovid();
    slingshot.display();
    drawSprites();
}

function spawnCovid (){
    if(frameCount % 120 === 0){
      var covidUL = createSprite(random(0,500),-30,20,20);
      covidUL.addImage(covidImage);
      covidUL.scale = 0.1;
      covidUL.velocityX =random(7);
      covidUL.velocityY =random(7);
      //covid.lifeTime = 10;

      var covidUR = createSprite(830,random(0,200),20,20);
      covidUR.addImage(covidImage);
      covidUR.scale = 0.1;
      covidUR.velocityX =random(7);
      covidUR.velocityY =random(-7);

      var covidBL = createSprite(-30,random(600,800),20,20);
      covidBL.addImage(covidImage);
      covidBL.scale = 0.1;
      covidBL.velocityX =random(-7);
      covidBL.velocityY =random(-7);
      //covid.lifeTime = 10;

      var covidBR = createSprite(random(700,1200),-830,20,20);
      covidBR.addImage(covidImage);
      covidBR.scale = 0.1;
      covidBR.velocityY =random(-7);
      covidBR.velocityX =random(7);
    }
}