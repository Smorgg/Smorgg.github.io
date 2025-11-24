let clothColor;
let bgColor;
let hairOffsetX = 0;
let hairOffsetY = 0;
const hairMoveSpeed = 10;

function setup() {
  createCanvas(600, 400);
  canvas.parent('sketch3');
  clothColor = color(0);
  bgColor = color(0, 200, 150);
}

function draw() {
  background(bgColor);

  noStroke();
  fill(0);
  ellipse(300, 173, 230, 230);
  fill(244, 217, 203);
  ellipse(300, 200, 210, 230);

  let cx = 250;
  let cy = 180;
  let w = 60;
  let h = 30;

  fill(255);
  ellipse(cx, cy, w, h);
  let cx2 = 350;
  ellipse(cx2, cy, w, h);

  let pupilMoveRadiusX = w / 4;
  let pupilMoveRadiusY = h / 5;

  let pupilX1 = map(mouseX, 0, width, cx - pupilMoveRadiusX, cx + pupilMoveRadiusX, true);
  let pupilY1 = map(mouseY, 0, height, cy - pupilMoveRadiusY, cy + pupilMoveRadiusY, true);
  let pupilX2 = map(mouseX, 0, width, cx2 - pupilMoveRadiusX, cx2 + pupilMoveRadiusX, true);
  let pupilY2 = map(mouseY, 0, height, cy - pupilMoveRadiusY, cy + pupilMoveRadiusY, true);

  fill(0);
  ellipse(pupilX1, pupilY1, h * 0.8, h * 0.8);
  ellipse(pupilX2, pupilY2, h * 0.8, h * 0.8);

  noFill();
  let spacingX = 3;

  for (let x = 260; x < 330; x += spacingX) {
    drawLeftHair(x, 180);
  }
  for (let x = 280; x < 330; x += spacingX) {
    drawRightHair(x, 180);
  }
  drawHairM(300, 94);

  drawNose(300, 220);
  drawBody(300, 400);
  drawNeck(300, 400);
  drawMouth(300, 250);
  drawCollar(300, 400);
}

function mouseClicked() {
  clothColor = color(random(255), random(255), random(255));

  let r = red(clothColor);
  let g = green(clothColor);
  let b = blue(clothColor);
  bgColor = color(255 - r, 255 - g, 255 - b);
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    clothColor = color(0);
    bgColor = color(0, 200, 150);
    hairOffsetX = 0;
    hairOffsetY = 0;
    return;
  } else if (key === 's' || key === 'S') {
    saveGif('mySketch', 10); 
  }

  if (keyCode === LEFT_ARROW) {
    hairOffsetX -= hairMoveSpeed;
  } else if (keyCode === RIGHT_ARROW) {
    hairOffsetX += hairMoveSpeed;
  } else if (keyCode === UP_ARROW) {
    hairOffsetY -= hairMoveSpeed;
  } else if (keyCode === DOWN_ARROW) {
    hairOffsetY += hairMoveSpeed;
  }
}

function drawLeftHair(offsetX, offsetY) {
  stroke(0);
  strokeWeight(3);
  beginShape();
  curveVertex(   0 + offsetX, -110 + offsetY);
  curveVertex(   0 + offsetX, -110 + offsetY);
  curveVertex( -60 + offsetX + (hairOffsetX / 2), -120 + offsetY + (hairOffsetY / 2));
  curveVertex( -50 + offsetX + hairOffsetX,  -20 + offsetY + hairOffsetY);
  curveVertex(-100 + offsetX + hairOffsetX,    0 + offsetY + hairOffsetY);
  curveVertex(-100 + offsetX + (hairOffsetX * 2),    0 + offsetY + (hairOffsetY * 2));
  curveVertex(-100 + offsetX + (hairOffsetX * 2),    0 + offsetY + (hairOffsetY * 2));
  endShape();
}

function drawRightHair(offsetX, offsetY) {
  stroke(0);
  strokeWeight(3);
  beginShape();
  curveVertex(  0 + offsetX, -110 + offsetY);
  curveVertex(  0 + offsetX, -110 + offsetY);
  curveVertex( 60 + offsetX + (hairOffsetX / 2), -120 + offsetY + (hairOffsetY / 2));
  curveVertex( 50 + offsetX + hairOffsetX,  -20 + offsetY + hairOffsetY);
  curveVertex(100 + offsetX + hairOffsetX,    0 + offsetY + hairOffsetY);
  curveVertex(100 + offsetX + (hairOffsetX * 2),    0 + offsetY + (hairOffsetY * 2));
  curveVertex(100 + offsetX + (hairOffsetX * 2),    0 + offsetY + (hairOffsetY * 2));
  endShape();
}

function drawBody(offsetX, offsetY) {
  stroke(clothColor);
  fill(clothColor);
  beginShape();
  curveVertex(-220 + offsetX, 0 + offsetY);
  curveVertex(-220 + offsetX, 0 + offsetY);
  vertex(-200 + offsetX, -30 + offsetY);
  vertex( -80 + offsetX, -50 + offsetY);
  vertex(  80 + offsetX, -50 + offsetY);
  vertex( 200 + offsetX, -30 + offsetY);
  vertex( 220 + offsetX,   0 + offsetY);
  vertex( 220 + offsetX,   0 + offsetY);
  endShape();
}

function drawHairM(offsetX, offsetY) {
  fill(0);
  triangle(0 + offsetX, 0 + offsetY, -20 + offsetX, -14 + offsetY, 30 + offsetX, -19 + offsetY);
}

function drawNose(offsetX, offsetY) {
  stroke(255, 230, 203);
  fill(255, 230, 203);
  triangle(0 + offsetX, -40 + offsetY, -10 + offsetX, 0 + offsetY, 10 + offsetX, 0 + offsetY);
}

function drawNeck(offsetX, offsetY) {
  noStroke();
  fill(244, 217, 203);
  beginShape();
  curveVertex( 30 + offsetX,    0 + offsetY);
  curveVertex( 30 + offsetX,    0 + offsetY);
  curveVertex( 25 + offsetX,  -50 + offsetY);
  curveVertex( 30 + offsetX, -120 + offsetY);
  curveVertex(-30 + offsetX, -120 + offsetY);
  curveVertex(-25 + offsetX,  -50 + offsetY);
  curveVertex(-30 + offsetX,    0 + offsetY);
  curveVertex(-30 + offsetX,    0 + offsetY);
  endShape();
}

function drawMouth(offsetX, offsetY) {
  stroke(0);
  noFill();
  arc(0 + offsetX, 0 + offsetY, 80, 60, 0, PI);
}

function drawCollar(offsetX, offsetY) {
  noStroke();
  fill(clothColor);
  beginShape();
  curveVertex( 40 + offsetX,   0 + offsetY);
  curveVertex( 40 + offsetX,   0 + offsetY);
  curveVertex( 40 + offsetX, -20 + offsetY);
  curveVertex(  0 + offsetX, -15 + offsetY);
  curveVertex(-40 + offsetX, -20 + offsetY);
  curveVertex(-40 + offsetX,   0 + offsetY);
  curveVertex(-40 + offsetX,   0 + offsetY);
  endShape();

}
