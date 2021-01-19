//Create variables here
var dog,happydog;
var database;
var foodS,foodStock;
function preload()
dogImage=loadImage(sprite/dog.png);
dogImage=loadImage (sprite/happydog.png);
	//load images here


function setup() {
  createCanvas(500,500);
  dog=new Dog(250,250);
  dog.addImage(dog.png)
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background=(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happydog.png);
}

  drawSprites();
  text=("press up arrow to feed the dog"(300,300));
  textsize=(20)
  //add styles here

}



