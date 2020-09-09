var player;
var house1, house2, house3, house4;
var rand;
var score = 100;
var text_ready;
var dog;
var order1, order2, order3, order4;
var shop;
var pizza1, pizza2, pizza3, pizza4;
var ord1,ord2,ord3,ord4;
var road1,road2, road3, road4;
var car1, car2, car3, car4;
var delivery_sound, crash_sound, pick_sound;



function preload()
{
player_img = loadImage("../images/player_animation/Mini_truck.png");
player_img_down = loadImage("../images/player_animation/Mini_truck_down.png");
player_img_left = loadImage("../images/player_animation/Mini_truck_left.png");
player_img_right = loadImage("../images/player_animation/Mini_truck_right.png");
house1_img = loadImage("../images/House_final.png");
house2_img = loadImage("../images/House_final.png");
house3_img = loadImage("../images/House_final.png");
house4_img = loadImage("../images/House_final.png");
shop_img = loadImage("../images/pizza_Shop.jpg");
car1_img = loadImage("../images/Police.png");
car2_img = loadImage("../images/Black_viper.png");
car3_img = loadImage("../images/Audi.png");
//car4_img = loadImage("../images/taxi.png");
road1_img = loadImage("../images/road.png");
road2_img = loadImage("../images/road.png");
road3_img = loadImage("../images/road2.png");
road4_img = loadImage("../images/road2.png");
delivery_sound = loadSound("../musics/point.wav");
//crash_sound = loadSound("../musics/crashed.wav");
pick_sound = loadSound("../musics/picked.wav");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  //bg = createSprite(400,200, 10,10);
  //bg.addImage("bg", bg_image);
  player = createSprite(200, 200, 30, 30);
  player.addImage("player", player_img);
  player.scale = 0.2;
  house1 = createSprite(100,370,100,100);
  house1.addImage("house1", house1_img);
  house1.scale = 1.5;
  order1 = createSprite(150,360,20,20);
  order1.shapeColor = "yellow";
  house2 = createSprite(700,370,100,100);
  house2.addImage("house2", house2_img);
  house2.scale = 1.5;
  order2 = createSprite(600,360,20,20);
  order2.shapeColor = "yellow";
  house3 = createSprite(700,30,100,100);
  house3.addImage("house3", house3_img);
  house3.scale = 1.5;
  order3 = createSprite(650,30,20,20);
  order3.shapeColor = "yellow";
  house4 = createSprite(100,30,100,100);
  house4.addImage("house4", house4_img);
  house4.scale = 1.5;
  order4 = createSprite(150,30,20,20);
  order4.shapeColor = "yellow";
  shop = createSprite(400,200,100,100);
  pizza1 = createSprite(330,200,20,20);
  pizza1.shapeColor = "red";
  pizza2 = createSprite(470,200,20,20);
  pizza2.shapeColor = "blue";
  pizza3 = createSprite(400,270,20,20);
  pizza3.shapeColor = "green";
  pizza4 = createSprite(400,130,20,20);
  pizza4.shapeColor = "yellow";
  road1 = createSprite(400,80,250,30);
  road1.addImage("road1", road1_img);
  road1.scale = 2;
  car1 = createSprite(500, 80,10,10);
  car1.addImage("car1" , car1_img);
  car1.scale = 0.2;
  road2 = createSprite(400,320,250,30);
  road2.addImage("road_2", road2_img);
  road2.scale = 2;
  car2 = createSprite(500, 320,10,10);
  car2.addImage("car_2", car2_img);
  car2.scale = 0.2;
  road3 = createSprite(250,200,30,250);
  road3.addImage("road3", road3_img);
  road3.scale = 2;
  car3 = createSprite(250,80,10,10);
  car3.addImage("car_3", car3_img);
  car3.scale = 0.2;
  road4 = createSprite(550,200,30,250);
  road4.addImage("road4", road4_img);
  road4.scale = 2;
  car4 = createSprite(550,280,10,10);
  //car4.addImage("car_4", car4_img);
  car4.scale = 0.2;
  shop.addImage("shop" , shop_img);

}

function draw() {
  background("grey");
  

  if ( touches.length > 0  || keyDown("UP_ARROW")) {
  
    player.velocityX=0;
    player.velocityY=-8;
    touches = [];
    }
    if (keyDown(DOWN_ARROW)) {
      
    player.velocityX=0;
    player.velocityY=8;
    player.addImage("player_down", player_img_down);
    }
    if (keyDown(LEFT_ARROW)) {
      
    player.velocityX=-8;
    player.velocityY=0;
    player.addImage("player_left", player_img_left);
    }
    if (keyDown(RIGHT_ARROW)) {
      
    player.velocityX=8;
    player.velocityY=0;
    player.addImage("player_right", player_img_right);
    
    }
    rand = Math.round(random(1,4));
    if(frameCount%150===0){
    if(rand === 1)
    {
      order1.shapeColor = "red";
      order2.shapeColor = "green";
      order3.shapeColor = "yellow";
      order4.shapeColor = "blue";
    }
    //else
    //{
     // house1.shapeColor = "green";
    //}

    if(rand === 2)
    {
      order1.shapeColor = "yellow";
      order2.shapeColor = "red";
      order3.shapeColor = "blue";
      order4.shapeColor = "green";
    }
    //else
    //{
      //house2.shapeColor = "green";
    //}


    if(rand === 3)
    {
      order1.shapeColor = "green";
      order2.shapeColor = "blue";
      order3.shapeColor = "red";
      order4.shapeColor = "yellow";
    }
    //else
    //{
      //house3.shapeColor = "green";
    //}


    if(rand === 4)
    {
      order1.shapeColor = "blue";
      order2.shapeColor = "yellow";
      order3.shapeColor = "green";
      order4.shapeColor = "red";
    }
    //else
    //{
      //house4.shapeColor = "green";
    //}
  }
 
  if(player.collide(house1) && house1.shapeColor === "red")
  {
    score = score + 10;
    delivery_sound.play();
  }
  else if(player.collide(house1) && house1.shapeColor === "green")
  {
    score = score -10;
    delivery_sound.play();
  }

  if(player.collide(house2) && house2.shapeColor === "red")
  {
    score = score + 10;
    delivery_sound.play();
  }
  else if(player.collide(house2) && house2.shapeColor === "green")
  {
    score = score -10;
    delivery_sound.play();
  }

  if(player.collide(house3) && house3.shapeColor === "red")
  {
    score = score + 10;
    delivery_sound.play();
  }
  else if(player.collide(house3) && house3.shapeColor === "green")
  {
    score = score -10;
    delivery_sound.play();
  }

  if(player.collide(house4) && house4.shapeColor === "red")
  {
    score = score + 10;
    delivery_sound.play();
  }
  else if(player.collide(house4) && house4.shapeColor === "green")
  {
    score = score -10;
    delivery_sound.play();
  }

  if(frameCount % 230 === 0)
  {
    console.log("YAY");
  }

  
  if(player.isTouching(pizza1))
  {
   //pick_sound.play()
    pizza1.x = player.x;
    pizza1.y = player.y;
    (pizza2.x != player.x && pizza2.y != player.y && pizza3.x != player.x && pizza3.y != player.y&&pizza4.x != player.x&&pizza4.y != player.y);
  }

  if(player.isTouching(pizza2))
  {
    //pick_sound.play()
    pizza2.x = player.x;
    pizza2.y = player.y;
    (pizza1.x != player.x && pizza1.y != player.y && pizza3.x != player.x && pizza3.y != player.y&&pizza4.x != player.x&&pizza4.y != player.y);
  }

  if(player.isTouching(pizza3))
  {
    //pick_sound.play()
    pizza3.x = player.x;
    pizza3.y = player.y;
    (pizza1.x != player.x && pizza1.y != player.y && pizza2.x != player.x && pizza2.y != player.y&&pizza4.x != player.x&&pizza4.y != player.y);
  }


  if(player.isTouching(pizza4))
  {
    //pick_sound.play()
    pizza4.x = player.x;
    pizza4.y = player.y;
    (pizza1.x != player.x && pizza1.y != player.y && pizza3.x != player.x && pizza3.y != player.y&&pizza2.x != player.x&&pizza2.y != player.y);
  }

one_at_time();
//give points to player
point_order1();
point_order2();
point_order3();
point_order4();

//execute car movement
car_movement();


player.collide(shop);

  drawSprites();
  textSize (20);
  fill("red");
  text("Score: " + score , 400,30);
}



function point_order1()
{
  if(pizza1.collide(order1) && order1.shapeColor === "red")
  {
    score = score +10;
    delivery_sound.play()
    pizza1.destroy()
    pizza1 = createSprite(330,200,20,20);
  pizza1.shapeColor = "red";
  /*
  order1.destroy();
  order1 = createSprite(150,360,10,10);
*/
order1.shapeColor = "brown"
  }
 else if(pizza1.collide(order1) && order1.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza1.collide(order1) && order1.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza1.collide(order1) && order1.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza2.collide(order1) && order1.shapeColor === "blue")
  {
    score = score + 10;
    delivery_sound.play()
    pizza2.destroy();
    pizza2 = createSprite(470,200,20,20);
  pizza2.shapeColor = "blue";
  /*
  order1.destroy();
  order1 = createSprite(150,360,10,10);
*/
order1.shapeColor = "brown"
  }
  else if(pizza2.collide(order1) && order1.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza2.collide(order1) && order1.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza2.collide(order1) && order1.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza3.collide(order1) && order1.shapeColor === "green")
  {
    score = score + 10;
    delivery_sound.play()
    pizza3.destroy();
    pizza3 = createSprite(400,270,20,20);
  pizza3.shapeColor = "green";
  /*
  order1.destroy();
  order1 = createSprite(150,360,10,10);
 */
order1.shapeColor = "brown";
  }
  else if(pizza3.collide(order1) && order1.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza3.collide(order1) && order1.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza3.collide(order1) && order1.shapeColor === "yellow"){
    score = score-10;
  }
  if(pizza4.collide(order1) && order1.shapeColor === "yellow")
  {
    score = score + 10;
    delivery_sound.play()
    pizza4.destroy();
    pizza4 = createSprite(400,130,20,20);
  pizza4.shapeColor = "yellow";
  /*
  order1.destroy();
  order1 = createSprite(150,360,10,10);
 */
order1.shapeColor = "brown";
  }
  else if(pizza4.collide(order1) && order1.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza4.collide(order1) && order1.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza4.collide(order1) && order1.shapeColor === "yellow"){
    score = score-10;
  }
}

function point_order2()
{
  if(pizza1.collide(order2) && order2.shapeColor === "red")
  {
    score = score +10;
    delivery_sound.play()
    pizza1.destroy()
    pizza1 = createSprite(330,200,20,20);
  pizza1.shapeColor = "red";
  /*
  order2.destroy();
  order2 = createSprite(600,360,10,10);
 */
order2.shapeColor = "brown";
  }
 else if(pizza1.collide(order2) && order2.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza1.collide(order2) && order2.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza1.collide(order2) && order2.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza2.collide(order2) && order2.shapeColor === "blue")
  {
    score = score + 10;
    delivery_sound.play()
    pizza2.destroy();
    pizza2 = createSprite(470,200,20,20);
  pizza2.shapeColor = "blue";
  /*
  order2.destroy();
  order2 = createSprite(600,360,10,10);
*/
order2.shapeColor = "brown";
  }
  else if(pizza2.collide(order2) && order2.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza2.collide(order2) && order2.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza2.collide(order2) && order2.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza3.collide(order2) && order2.shapeColor === "green")
  {
    score = score + 10;
    delivery_sound.play()
    pizza3.destroy();
    pizza3 = createSprite(400,270,20,20);
  pizza3.shapeColor = "green";
  /*
  order2.destroy();
  order2 = createSprite(600,360,10,10);
*/
order2.shapeColor = "brown";
  }
  else if(pizza3.collide(order2) && order2.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza3.collide(order2) && order2.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza3.collide(order2) && order2.shapeColor === "yellow"){
    score = score-10;
  }
  if(pizza4.collide(order2) && order2.shapeColor === "yellow")
  {
    score = score + 10;
    delivery_sound.play()
    pizza4.destroy();
    pizza4 = createSprite(400,130,20,20);
  pizza4.shapeColor = "yellow";
  /*
  order2.destroy();
  order2 = createSprite(600,360,10,10);
  */
 order2.shapeColor = "brown";

  }
  else if(pizza4.collide(order2) && order2.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza4.collide(order2) && order2.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza4.collide(order2) && order2.shapeColor === "yellow"){
    score = score-10;
  }

}

function point_order3()
{
  if(pizza1.collide(order3) && order3.shapeColor === "red")
  {
    score = score +10;
    delivery_sound.play()
    pizza1.destroy()
    pizza1 = createSprite(330,200,20,20);
  pizza1.shapeColor = "red";
  /*
 order3.destroy();
 order3 = createSprite(650,30,10,10);
 */
order3.shapeColor = "brown";
  }
 else if(pizza1.collide(order3) && order3.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza1.collide(order3) && order3.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza1.collide(order3) && order3.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza2.collide(order3) && order3.shapeColor === "blue")
  {
    score = score + 10;
    delivery_sound.play()
    pizza2.destroy();
    pizza2 = createSprite(470,200,20,20);
  pizza2.shapeColor = "blue";
  /*
  order3.destroy();
  order3 = createSprite(650,30,10,10);
 */
order3.shapeColor = "brown";
  }
  else if(pizza2.collide(order3) && order3.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza2.collide(order3) && order3.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza2.collide(order3) && order3.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza3.collide(order3) && order3.shapeColor === "green")
  {
    score = score + 10;
    delivery_sound.play()
    pizza3.destroy();
    pizza3 = createSprite(400,270,20,20);
  pizza3.shapeColor = "green";
  /*
  order3.destroy();
  order3 = createSprite(650,30,10,10);
 */
order3.shapeColor = "brown";
  }
  else if(pizza3.collide(order3) && order3.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza3.collide(order3) && order3.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza3.collide(order3) && order3.shapeColor === "yellow"){
    score = score-10;
  }
  if(pizza4.collide(order3) && order3.shapeColor === "yellow")
  {
    score = score + 10;
    delivery_sound.play()
    pizza4.destroy();
    pizza4 = createSprite(400,130,20,20);
  pizza4.shapeColor = "yellow";
  /*
  order3.destroy();
  order3 = createSprite(650,30,10,10);
 */
order3.shapeColor = "brown";
  }
  else if(pizza4.collide(order3) && order3.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza4.collide(order3) && order3.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza4.collide(order3) && order3.shapeColor === "yellow"){
    score = score-10;
  }
}

function point_order4()
{
  if(pizza1.collide(order4) && order4.shapeColor === "red")
  {
    score = score +10;
    delivery_sound.play()
    pizza1.destroy()
    pizza1 = createSprite(330,200,20,20);
  pizza1.shapeColor = "red";
  /*
order4.destroy();
order4 = createSprite(150,30,10,10);
*/
order4.shapeColor = "brown";
  }
 else if(pizza1.collide(order4) && order4.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza1.collide(order4) && order4.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza1.collide(order4) && order4.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza2.collide(order4) && order4.shapeColor === "blue")
  {
    score = score + 10;
    delivery_sound.play()
    pizza2.destroy();
    pizza2 = createSprite(470,200,20,20);
  pizza2.shapeColor = "blue";
  /*
  order4.destroy();
  order4 = createSprite(150,30,10,10);
 */
order4.shapeColor = "brown";
  }
  else if(pizza2.collide(order4) && order4.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza2.collide(order4) && order4.shapeColor === "green"){
    score = score-10;
  }
  else if(pizza2.collide(order4) && order4.shapeColor === "yellow"){
    score = score-10;
  }

  if(pizza3.collide(order4) && order4.shapeColor === "green")
  {
    score = score + 10;
    delivery_sound.play()
    pizza3.destroy();
    pizza3 = createSprite(400,270,20,20);
  pizza3.shapeColor = "green";
  /*
  order4.destroy();
  order4 = createSprite(150,30,10,10);
 */
order4.shapeColor = "brown";
  }
  else if(pizza3.collide(order4) && order4.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza3.collide(order4) && order4.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza3.collide(order4) && order4.shapeColor === "yellow"){
    score = score-10;
  }
  if(pizza4.collide(order4) && order4.shapeColor === "yellow")
  {
    score = score + 10;
    delivery_sound.play()
    pizza4.destroy();
    pizza4 = createSprite(400,130,20,20);
  pizza4.shapeColor = "yellow";
  /*
  order4.destroy();
  order4 = createSprite(150,30,10,10);
 */
order4.shapeColor = "brown";
  }
  else if(pizza4.collide(order4) && order4.shapeColor === "red"){
    score = score-10;
  }
  else if(pizza4.collide(order4) && order4.shapeColor === "blue"){
    score = score-10;
  }
  else if(pizza4.collide(order4) && order4.shapeColor === "yellow"){
    score = score-10;
  }
}

function one_at_time()
{
  if(player.isTouching(pizza2) && pizza1.x === player.x && pizza1.y === player.y)
  {
    pizza1.destroy();
    pizza1 = createSprite(330,200,10,10);
    pizza1.shapeColor = "red";
    pizza2.x = player.x;
    pizza2.y = player.y;

  }

  if(player.isTouching(pizza3) && pizza1.x === player.x && pizza1.y === player.y)
  {
    pizza1.destroy();
    pizza1 = createSprite(330,200,10,10);
    pizza1.shapeColor = "red";
    pizza3.x = player.x;
    pizza3.y = player.y;

  }
  if(player.isTouching(pizza2) && pizza4.x === player.x && pizza4.y === player.y)
  {
    pizza4.destroy();
    pizza4 = createSprite(400,130,10,10);
  pizza4.shapeColor = "yellow";
    pizza2.x = player.x;
    pizza2.y = player.y;

  }
}

function car_movement()
{
  if(frameCount % 100 === 0)
  {
  //logic for car movement
  var rand_car = Math.round(random(1,4));
  switch(rand_car)
  {
    case 1 : car1.velocityX = -1
    break;
    case 2 : car2.velocityX = -1
    break;
    case 3: car3.velocityY = 1
    break;
    case 4 : car4.velocityY = -1
    break;
    default:
    break;
  
  }
  }
  if(car1.isTouching(road3))
  {
    car1.x = 500;
    //car1.velocityX = 0;
    //car1.velocityY = 2;
  }
  if(car2.isTouching(road3))
  {
    car2.x = 500;
  }

  if(car3.y > road2.y)
  {
    car3.y = 80
  }

  if(car4.y < road1.y)
  {
    car4.y = 280;
  }

  if(player.collide(car1) || player.collide(car2) || player.collide(car3 || player.collide(car4)))
  {
    score = score -1;
    //crash_sound.play()
  }

}

function decrease_score()
{
  if(order1.shapeColor === "brown" && order2.shapeColor === "brown" && order3.shapeColor === "brown" && order4.shapeColor === "brown")
  {
    score = score +100;
  }
  else
  {
    score = score -10;
  }
}



