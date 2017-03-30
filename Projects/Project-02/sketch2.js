var bug1;  // Declare objects
var bug2;
var bug3;
var bug4;
var bug5; 
var bug6;
var bug7;
var bug8;
var bug9;
var bug10;


var x, y;

var i =0;

var xspacing = 10;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 10.0; // Height of wave
var period = 300.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  // Create object
  bug1 = new Jitter();
  bug2 = new Jitter();
  bug3 = new Jitter();
  bug4 = new Jitter();
  bug5 = new Jitter();
  bug6 = new Jitter();
  bug7 = new Jitter();
  bug8 = new Jitter();
  bug9 = new Jitter();
  bug10 = new Jitter();

  w = 320;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));

}

function draw() {

  background(239, 176, 151);
  noStroke();

  calcWave1();
  renderWave1();
  calcWave2();
  renderWave2();
  calcWave3();
  renderWave3();
  calcWave4();
  renderWave4();
  calcWave5();
  renderWave5();
  calcWave6();
  renderWave6();
  calcWave7();
  renderWave7();
  calcWave8();
  renderWave8();
  calcWave9();
  renderWave9();
  calcWave10();
  renderWave10();
  calcWave11();
  renderWave11();
  calcWave12();
  renderWave12();
  calcWave13();
  renderWave13();
  calcWave14();
  renderWave14();
  calcWave15();
  renderWave15();
  calcWave16();
  renderWave16();
  calcWave17();
  renderWave17()
  calcWave18();
  renderWave18();
  calcWave19();
  renderWave19();
  calcWave20();
  renderWave20();
  calcWave21();
  renderWave21();
  calcWave22();
  renderWave22();
  calcWave23();
  renderWave23();
  calcWave24();
  renderWave24();
  calcWave25();
  renderWave25();
  calcWave26();
  renderWave26();
  calcWave27();
  renderWave27()
  calcWave28();
  renderWave28();
  calcWave29();
  renderWave29();
  calcWave30();
  renderWave30();
  calcWave31();
  renderWave31();
  calcWave32();
  renderWave32();
  calcWave33();
  renderWave33();
  calcWave34();
  renderWave34();
  calcWave35();
  renderWave35();
  calcWave36();
  renderWave36();
  calcWave37();
  renderWave37()
  calcWave38();
  renderWave38();
  calcWave39();
  renderWave39();
  calcWave40();
  renderWave40();
  calcWave41();
  renderWave41();
  calcWave42();
  renderWave42();
  calcWave43();
  renderWave43();
  calcWave44();
  renderWave44();
  calcWave45();
  renderWave45();
  calcWave46();
  renderWave46();
  calcWave47();
  renderWave47()
  calcWave48();
  renderWave48();
  calcWave49();
  renderWave49();
  calcWave50();
  renderWave50();
  calcWave51();
  renderWave51();
  calcWave52();
  renderWave52();
  calcWave53();
  renderWave53();
  calcWave54();
  renderWave54();
  calcWave55();
  renderWave55();
  calcWave56();
  renderWave56();

  fill(255,255,255,random(150,200));


  bug1.move();
  bug1.display();
  bug2.move();
  bug2.display();
  bug3.move();
  bug3.display();
  bug4.move();
  bug4.display();
  bug5.move();
  bug5.display();
  bug6.move();
  bug6.display();
  bug7.move();
  bug7.display();
  bug8.move();
  bug8.display();
  bug9.move();
  bug9.display();
  bug10.move();
  bug10.display();


  fill(239, 176, 151)

  quad(x-101, y+250, 0, y+250, 0, y-250, x-146, y-250);
  quad(x+101, y+250, windowWidth, y+250, windowWidth, y-250, x+146, y-250);
  rect(0, y+250, windowWidth, windowHeight)
  rect(0, 0, windowWidth, 128)

  noFill();
  stroke(255);
  strokeWeight(3);

  rect(x-165, y-275, 330, 24)
  quad(x+100, y+250, x-100, y+250, x-145, y-250, x+145, y-250);

  fill(255, 255, 255, 100);
  noStroke();
  quad(x-70, y+50, x-50, y+50, x+30, 0, x+10, 0);
  
if ( mouseY >=0 && mouseY <=630 && mouseX >= 200 && mouseX <= 500) {

    fill(255);
    noStroke();
    textSize(10);
    textFont("Helvetica");
    textAlign(CENTER);
    textLeading(20);
    text("Before the 1950s, standard sized soft-drink bottles were 6.5 ounces. By the 1960s, 12 ounce cans were the new standard. In the 1990s, plastic bottles became 20 ounces. The giant plastic bottles that we are familiar with today are 42 ounces, almost 7 times the original size in the 1950s.", width/2-90, 210+i, 180, 1000);   
    }

    if(i<240){
    i=i+1;      
    } else if (mouseIsPressed){
      i=0;
    }
    }

// if ( mouseY >=630 && mouseY <=650) {

//     fill(255);
//     noStroke();
//     text("By the 1960s, 12 oounce cans were the new standard.", 100, 400,100,100);    
//     }

    // if(i<50){
    // i=i+1;      
    // } else if (mouseIsPressed){
    //   i=0;
    // }
    // }

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// Jitter class
function Jitter() {
  this.x = random(width/2-120,width/2+100);
  this.y = random(height/2-100, height/2+200);
  this.diameter = random(10, 20);
  this.speed = random(0.5,2);

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);

  };
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Sine wave class


function calcWave1() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave1() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+150)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////

//Sine wave class

function calcWave2() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave2() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+160)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////

//Sine wave class

function calcWave3() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave3() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+170)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////

//Sine wave class

function calcWave4() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave4() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+180)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////

//Sine wave class

function calcWave5() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave5() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+190)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////

//Sine wave class

function calcWave6() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave6() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+200)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////

function calcWave7() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave7() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+210)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave8() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave8() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+220)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave9() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave9() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+230)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave10() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave10() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+240)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave11() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave11() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+250)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave12() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave12() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+260)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave13() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave13() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+270)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave14() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave14() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+280)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave15() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave15() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+290)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave16() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave16() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+300)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave17() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave17() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+310)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave18() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave18() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+320)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////

function calcWave19() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave19() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+330)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave20() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave20() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+340)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave21() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave21() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+350)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave22() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave22() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+360)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave23() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave23() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+370)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave24() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave24() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+380)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave25() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave25() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+390)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave26() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave26() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+400)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave27() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave27() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+410)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave28() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave28() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+420)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave29() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave29() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+430)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave30() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave30() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+440)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave31() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave31() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+450)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave32() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave32() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+460)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave33() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave33() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+470)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave34() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave34() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+480)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave35() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave35() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+490)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave36() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave36() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+500)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave37() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave37() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+510)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave38() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave38() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+520)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave39() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave39() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+530)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave40() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave40() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+540)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave41() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave41() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+550)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave42() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave42() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+560)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave43() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave43() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+570)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave44() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave44() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+580)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave45() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave45() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+590)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave46() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave46() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+600)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave47() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave47() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+610)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave48() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave48() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+620)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave49() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave49() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+630)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave50() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave50() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+640)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////

function calcWave51() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave51() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+650)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////

function calcWave52() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave52() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+660)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave53() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave53() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+670)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave54() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave54() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+680)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave55() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave55() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+690)+yvalues[x], 5, 5);
  }
}

//////////////////////////////////////////////////////////////////////////
function calcWave56() {
  theta += 0.001;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave56() {
  noStroke();
  fill(102, 17, 17, 70);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse((width/2-150)+x*xspacing, (mouseY+700)+yvalues[x], 5, 5);
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}