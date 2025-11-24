new p5(function(p) {
  let clothColor;
  let bgColor;
  let hairOffsetX = 0;
  let hairOffsetY = 0;
  const hairMoveSpeed = 10;

  p.setup = function() {
    let canvas = p.createCanvas(600, 400);
    canvas.parent('sketch3');
    clothColor = p.color(0);
    bgColor = p.color(0, 200, 150);
  };

  p.draw = function() {
    p.background(bgColor);

    p.noStroke();
    p.fill(0);
    p.ellipse(300, 173, 230, 230);
    p.fill(244, 217, 203);
    p.ellipse(300, 200, 210, 230);

    let cx = 250;
    let cy = 180;
    let w = 60;
    let h = 30;

    p.fill(255);
    p.ellipse(cx, cy, w, h);
    let cx2 = 350;
    p.ellipse(cx2, cy, w, h);

    let pupilMoveRadiusX = w / 4;
    let pupilMoveRadiusY = h / 5;

    let pupilX1 = p.map(p.mouseX, 0, p.width, cx - pupilMoveRadiusX, cx + pupilMoveRadiusX, true);
    let pupilY1 = p.map(p.mouseY, 0, p.height, cy - pupilMoveRadiusY, cy + pupilMoveRadiusY, true);
    let pupilX2 = p.map(p.mouseX, 0, p.width, cx2 - pupilMoveRadiusX, cx2 + pupilMoveRadiusX, true);
    let pupilY2 = p.map(p.mouseY, 0, p.height, cy - pupilMoveRadiusY, cy + pupilMoveRadiusY, true);

    p.fill(0);
    p.ellipse(pupilX1, pupilY1, h * 0.8, h * 0.8);
    p.ellipse(pupilX2, pupilY2, h * 0.8, h * 0.8);

    p.noFill();
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
  };

  p.mouseClicked = function() {
    clothColor = p.color(p.random(255), p.random(255), p.random(255));

    let r = p.red(clothColor);
    let g = p.green(clothColor);
    let b = p.blue(clothColor);
    bgColor = p.color(255 - r, 255 - g, 255 - b);
  };

  p.keyPressed = function() {
    if (p.key === 'r' || p.key === 'R') {
      clothColor = p.color(0);
      bgColor = p.color(0, 200, 150);
      hairOffsetX = 0;
      hairOffsetY = 0;
      return;
    }

    if (p.keyCode === p.LEFT_ARROW) {
      hairOffsetX -= hairMoveSpeed;
    } else if (p.keyCode === p.RIGHT_ARROW) {
      hairOffsetX += hairMoveSpeed;
    } else if (p.keyCode === p.UP_ARROW) {
      hairOffsetY -= hairMoveSpeed;
    } else if (p.keyCode === p.DOWN_ARROW) {
      hairOffsetY += hairMoveSpeed;
    }
  };

  function drawLeftHair(offsetX, offsetY) {
    p.stroke(0);
    p.strokeWeight(3);
    p.beginShape();
    p.curveVertex(   0 + offsetX, -110 + offsetY);
    p.curveVertex(   0 + offsetX, -110 + offsetY);
    p.curveVertex( -60 + offsetX + (hairOffsetX / 2), -120 + offsetY + (hairOffsetY / 2));
    p.curveVertex( -50 + offsetX + hairOffsetX,  -20 + offsetY + hairOffsetY);
    p.curveVertex(-100 + offsetX + hairOffsetX,    0 + offsetY + hairOffsetY);
    p.curveVertex(-100 + offsetX + (hairOffsetX * 2),    0 + offsetY + (hairOffsetY * 2));
    p.curveVertex(-100 + offsetX + (hairOffsetX * 2),    0 + offsetY + (hairOffsetY * 2));
    p.endShape();
  }

  function drawRightHair(offsetX, offsetY) {
    p.stroke(0);
    p.strokeWeight(3);
    p.beginShape();
    p.curveVertex(  0 + offsetX, -110 + offsetY);
    p.curveVertex(  0 + offsetX, -110 + offsetY);
    p.curveVertex( 60 + offsetX + (hairOffsetX / 2), -120 + offsetY + (hairOffsetY / 2));
    p.curveVertex( 50 + offsetX + hairOffsetX,  -20 + offsetY + hairOffsetY);
    p.curveVertex(100 + offsetX + hairOffsetX,    0 + offsetY + hairOffsetY);
    p.curveVertex(100 + offsetX + (hairOffsetX * 2),    0 + offsetY + (hairOffsetY * 2));
    p.curveVertex(100 + offsetX + (hairOffsetX * 2),    0 + offsetY + (hairOffsetY * 2));
    p.endShape();
  }

  function drawBody(offsetX, offsetY) {
    p.stroke(clothColor);
    p.fill(clothColor);
    p.beginShape();
    p.curveVertex(-220 + offsetX, 0 + offsetY);
    p.curveVertex(-220 + offsetX, 0 + offsetY);
    p.vertex(-200 + offsetX, -30 + offsetY);
    p.vertex( -80 + offsetX, -50 + offsetY);
    p.vertex(  80 + offsetX, -50 + offsetY);
    p.vertex( 200 + offsetX, -30 + offsetY);
    p.vertex( 220 + offsetX,   0 + offsetY);
    p.vertex( 220 + offsetX,   0 + offsetY);
    p.endShape();
  }

  function drawHairM(offsetX, offsetY) {
    p.fill(0);
    p.triangle(0 + offsetX, 0 + offsetY, -20 + offsetX, -14 + offsetY, 30 + offsetX, -19 + offsetY);
  }

  function drawNose(offsetX, offsetY) {
    p.stroke(255, 230, 203);
    p.fill(255, 230, 203);
    p.triangle(0 + offsetX, -40 + offsetY, -10 + offsetX, 0 + offsetY, 10 + offsetX, 0 + offsetY);
  }

  function drawNeck(offsetX, offsetY) {
    p.noStroke();
    p.fill(244, 217, 203);
    p.beginShape();
    p.curveVertex( 30 + offsetX,    0 + offsetY);
    p.curveVertex( 30 + offsetX,    0 + offsetY);
    p.curveVertex( 25 + offsetX,  -50 + offsetY);
    p.curveVertex( 30 + offsetX, -120 + offsetY);
    p.curveVertex(-30 + offsetX, -120 + offsetY);
    p.curveVertex(-25 + offsetX,  -50 + offsetY);
    p.curveVertex(-30 + offsetX,    0 + offsetY);
    p.curveVertex(-30 + offsetX,    0 + offsetY);
    p.endShape();
  }

  function drawMouth(offsetX, offsetY) {
    p.stroke(0);
    p.noFill();
    p.arc(0 + offsetX, 0 + offsetY, 80, 60, 0, p.PI);
  }

  function drawCollar(offsetX, offsetY) {
    p.noStroke();
    p.fill(clothColor);
    p.beginShape();
    p.curveVertex( 40 + offsetX,   0 + offsetY);
    p.curveVertex( 40 + offsetX,   0 + offsetY);
    p.curveVertex( 40 + offsetX, -20 + offsetY);
    p.curveVertex(  0 + offsetX, -15 + offsetY);
    p.curveVertex(-40 + offsetX, -20 + offsetY);
    p.curveVertex(-40 + offsetX,   0 + offsetY);
    p.curveVertex(-40 + offsetX,   0 + offsetY);
    p.endShape();
  }
});
