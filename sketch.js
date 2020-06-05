var wall, car;


function setup() {
  createCanvas(1200,800);

  wall = createSprite(200,200, 20, 80);
  wall.shapeColor = "white";
  wall.debug = true;

  car = createSprite(400,200,30,30);
  car.shapeColor = "white";
  car.debug = true;
}

function draw() {
  background(0);  

  car.x = World.mouseX;
  car.y = World.mouseY;

  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2){
   
    car.shapeColor = "red";

    wall.shapeColor = "red";

  }

  else{

    car.shapeColor = "white";

    wall.shapeColor = "white";


  }


  drawSprites();
}