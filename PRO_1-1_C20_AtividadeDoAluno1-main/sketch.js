const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }
  var ops={ 
    isStatic:true
  };
  var rocks_options ={
    restitution: 0.85
  };
  rocks =Bodies.circle(300,20,10,rocks_options);
  world.add(world,rocks);
  
  wall=Bodies.rectangle(300,150,70,10,ground_options);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background (51);
 Engine.update(engine);
  ellipse(rock.position.x,rock.position.y,20);
 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  rect
}

