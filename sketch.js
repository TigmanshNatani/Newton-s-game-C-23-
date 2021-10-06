const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;
    //putting the roof in our world.
	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

   //putting the bob1 in our world.
	var bob1_options={
		isStatic:true
	}
    bob1 = Bodies.circle(300,500,25,bob1_options);
	World.add(world,bob1);

	con = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1,
	})
	World.add(world,con);

	//putting the bob2 in our world.
    var bob2_options={
		isStatic:true
	}
	bob2 = Bodies.circle(350,500,25,bob2_options);
	World.add(world,bob2);

	con = Matter.Constraint.create({
		pointA:{x:350,y:100},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1,
	})
	World.add(world,con);

    //putting the bob3 in our world.
	var bob3_options={
		isStatic:true
	}
	bob3 = Bodies.circle(400,500,25,bob3_options);
	World.add(world,bob3);

	con = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1,
	})
	World.add(world,con);

    //putting the bob4 in our world.
	var bob4_options={
		isStatic:true
	}
	bob4 = Bodies.circle(450,500,25,bob4_options);
	World.add(world,bob4);

	con = Matter.Constraint.create({
		pointA:{x:450,y:100},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1,
	})
	World.add(world,con);

	//putting the bob5 in our world.
	var bob5_options={
		isStatic:true
	}
	bob5 = Bodies.circle(500,500,25,bob5_options);
	World.add(world,bob5);
	
	con = Matter.Constraint.create({
		pointA:{x:500,y:100},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1,
	})
    World.add(world,con);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

 

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  
  //create ellipse shape for multiple bobs here
 ellipse(bob1.position.x,bob1.position.y,25);
 push();
 strokeWeight(2);
 stroke("black");
 line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
 pop();

 ellipse(bob2.position.x,bob2.position.y,25);
 push();
 strokeWeight(2);
 stroke("black");
 line(con.pointA.x,con.pointA.y,bob2.position.x,bob2.position.y);
 pop();
 
 ellipse(bob3.position.x,bob3.position.y,25);
 push();
 strokeWeight(2);
 stroke("black");
 line(con.pointA.x,con.pointA.y,bob3.position.x,bob3.position.y);
 pop();
 
 ellipse(bob4.position.x,bob4.position.y,25);
 push();
 strokeWeight(2);
 stroke("black");
 line(con.pointA.x,con.pointA.y,bob4.position.x,bob4.position.y);
 pop();
 
 ellipse(bob5.position.x,bob5.position.y,25);
 push();
 strokeWeight(2);
 stroke("black");
 line(con.pointA.x,con.pointA.y,bob5.position.x,bob5.position.y);
 pop();
 
 Engine.run(engine);

}
//Write keyPressed function and apply force on pressing up_arrow key on the first bob
