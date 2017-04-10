
var x = 400;
var y = 300;
var xspeed = 2;
var yspeed = 2;

function setup() {

	createCanvas(600,600);
	

}

function draw() {

	background(0);

	noFill();
  	stroke(random(255), random(255), random(255));
  	strokeWeight(3);

  	rect(x-65, y-175, 330, 24)
  	quad(x, y+150, x-200, y+150, x-245, y-350, x+45, y-350);

  	fill(random(255), random(255), random(255));
  	noStroke();
  	quad(x-170, y+130, x-150, y+130, x-70, y-100, x-90, y-100);


	if(x > width ||x < 0){
		xspeed =xspeed * -1;
	}

	if(y > height ||y <0){
		yspeed =yspeed *-1;
	}

		x =x +xspeed;
		y =y +yspeed;

}


