//base codeBy Roni Kaufman
// https://ronikaufman.github.io/
// https://twitter.com/KaufmanRoni


let colors = ['#f70640', '#FF900E', '#fdd903', '#6FF458', '#C9E265', '#CCD6DD', '#00FFFF', '#38187d', '#a4459f', '#F912EE', '#2F0A30'];

var tileCountX = 80;
var tileCountY = 120;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];



function setup() {
	createCanvas(600, 800);
	rectMode(CENTER);
	background(0);
	translate(width / 2, height / 2);
	scale(0.5);
	translate(-width / 2, -height / 2);
    colorMode(HSB, 360, 100, 100, 100);


      
        for (var i = 0; i < tileCountX; i++) {
    hueValues[i] = random(460);
    saturationValues[i] = random(200);
    brightnessValues[i] = random(200);
  }
      
	}



function draw() {


  // limit mouse coordinates to canvas
  var mX = constrain(mouseX, 10, width);
  var mY = constrain(mouseY, 10, height);

  // tile counter
  var counter = 192;

  // map mouse to grid resolution
  var currentTileCountX = int(map(mX, 0, width, 10, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 10, tileCountY));
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      var index = counter % currentTileCountX;

      // get component color values
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}

function draw() {

let h = height / 10;
	for (let y = 0; y < height; y += h) {
		let s = int(random(10, 24));
		let nums = [];
		for (let i = 0; i <= s; i++) {
			nums.push(nf(i, 9, 0));
		}
		shuffle(nums, true);
		let cc = int(random(s * 0.5));
		for (let i = 0; i < cc; i++) {
			nums.splice(0, 3);
		}
		nums.sort();

		shuffle(colors, true);
		noStroke();
     
		let w = width / s;
    
		for (let i = 0; i < nums.length; i++) {
			let n = nums[i];
			let x = n * w;
			let ww = (nums[i + 1] - n) * w;

			fill(colors[i % colors.length]);
			rect(x + ww / 2, y + h / 2, ww, h);
			fill(colors[(i + 7) % colors.length]);
			superShape(x + ww / 2, y + h / 2, ww, h);
      
		}
      
    }}


function superShape(x, y, w, h) {
	let rnd = int(random(6));
  
	if (rnd == 1) {
		let d = (w < h ? w : h) * random(0.5, 0.7);
		let xx = x + (random(-0.5, 0.5) * (w - (d)));
		let yy = y + (random(-0.5, 0.5) * (h - (d)));
		circle(xx, yy, d);
	} else if (rnd == 2) {
		let c = int(random(4))
		beginShape();
		if (c != 0) vertex(x - w / 2, y - h / 2);
		if (c != 1) vertex(x + w / 2, y - h / 2);
		if (c != 2) vertex(x + w / 2, y + h / 2);
		if (c != 3) vertex(x - w / 2, y + h / 2);
		endShape();
	} else if (rnd == 3) {
		rect(x, y, w * random(0.19, 0.88), h * random(0.1, 0.9));
	} else if (rnd == 4) {
		let rw = int(random(3, 8));
		let cl = int((w * rw) / h);
		let ww = w / cl;
		let hh = h / rw;
		for (let i = 0; i < rw; i++) {
			for (let j = 0; j < cl; j++) {
				let xx = (x - w / 2) + ww * j + ww / 2;
				let yy = (y - h / 2) + hh * i + hh / 2;
				if ((i + j) % 2 == 0) rect(xx, yy, ww, hh);
			}
		}
	} else if (rnd == 5) {
		let rw = int(random(3, 9));
		let cl = int((w * rw) / h);
		let ww = w / cl;
		let hh = h / rw;
		for (let i = 0; i < rw; i++) {
			for (let j = 0; j < cl; j++) {
				let xx = (x - w / 2) + ww * j + ww / 2;
				let yy = (y - h / 2) + hh * i + hh / 2;
				let d = (ww < hh ? ww : hh) * 0.9;
				circle(xx, yy, d);
             
			}
          
        
		}
       
	}}
  
