new p5(function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(600, 400);
    canvas.parent('sketch2');
  };

  p.draw = function() {
    p.background(0, 200, 150);
    
    p.noStroke();
    p.fill(0);
    p.ellipse(300, 173, 230, 230);
    p.fill(244, 217, 203);
    p.ellipse(300, 200, 210, 230);
    
    // 눈의 위치와 크기
    let cx = 250;
    let cy = 180;
    let w = 60;
    let h = 30;

    // 흰자
    p.fill(255);
    p.ellipse(cx, cy, w, h);
    let cx2 = 350;
    p.ellipse(cx2, cy, w, h);

    // 동공(고정 위치)
    p.fill(0);
    p.ellipse(cx, cy, h * 0.8, h * 0.8);  
    p.ellipse(cx2, cy, h * 0.8, h * 0.8);
    
    p.noFill();
    // 반복 간격 설정
    let spacingX = 3; // 가로 간격

    
    // 격자 형태로 곡선 반복
    for (let x = 260; x < 330; x += spacingX) {
      drawLefthair(x, 180);
    }
    for (let x = 280; x < 330; x += spacingX) {
      drawRighthair(x, 180);
    }
    
    
    p.fill(0);
    p.beginShape();
    p.curveVertex(80, 400);
    p.curveVertex(80, 400);
    p.vertex(100, 370);
    p.vertex(220, 350);
    p.vertex(380, 350);
    p.vertex(500, 370);
    p.vertex(520, 400);
    p.vertex(520, 400);
    
    p.endShape();
    
    p.fill(0);
    p.triangle(300, 94, 280, 80, 330, 75);
    
    p.stroke(255, 230, 203);
    p.fill(255, 230, 203);
    p.triangle(300, 180, 290, 220, 310, 220);
    
    p.noStroke();

    p.fill(244, 217, 203);
    p.beginShape();
    p.curveVertex(330, 400);
    p.curveVertex(330, 400);
    
    p.curveVertex(325, 350);

    p.curveVertex(330, 280);
    p.curveVertex(270, 280);
    
    p.curveVertex(275, 350);
    
    p.curveVertex(270, 400);
    p.curveVertex(270, 400);

    p.endShape();
    
    p.stroke(0);
    p.noFill();
    p.arc(300, 250, 80, 60, 0, p.PI);
    
    p.noStroke();
    p.fill(0);
    p.beginShape();
    p.curveVertex(340, 400);
    p.curveVertex(340, 400);
    p.curveVertex(340, 380);

    
    p.curveVertex(300, 385);

    p.curveVertex(260, 380);
    
    p.curveVertex(260, 400);
    p.curveVertex(260, 400);
    
    p.endShape();
  };

  function drawLefthair(offsetX, offsetY) {
    let pts = [
      [0, -110],
      [-60, -120],
      [-50, -20],
      [-100, 0]
    ];
    
    p.stroke(0);
    p.strokeWeight(3);
    p.beginShape();
    
    p.curveVertex(pts[0][0] + offsetX, pts[0][1] + offsetY);
    p.curveVertex(pts[0][0] + offsetX, pts[0][1] + offsetY);
    
    for (let i = 0; i < pts.length; i++) {
      p.curveVertex(pts[i][0] + offsetX, pts[i][1] + offsetY);
    }
    
    let lastIdx = pts.length - 1;
    p.curveVertex(pts[lastIdx][0] + offsetX, pts[lastIdx][1] + offsetY);
    p.curveVertex(pts[lastIdx][0] + offsetX, pts[lastIdx][1] + offsetY);
    
    p.endShape();
  }

  function drawRighthair(offsetX, offsetY) {
    let pts = [
      [0, -110],
      [60, -120],
      [50, -20],
      [100, 0]
    ];
    
    p.stroke(0);
    p.strokeWeight(3);
    p.beginShape();
    
    p.curveVertex(pts[0][0] + offsetX, pts[0][1] + offsetY);
    p.curveVertex(pts[0][0] + offsetX, pts[0][1] + offsetY);
    
    for (let i = 0; i < pts.length; i++) {
      p.curveVertex(pts[i][0] + offsetX, pts[i][1] + offsetY);
    }
    
    let lastIdx = pts.length - 1;
    p.curveVertex(pts[lastIdx][0] + offsetX, pts[lastIdx][1] + offsetY);
    p.curveVertex(pts[lastIdx][0] + offsetX, pts[lastIdx][1] + offsetY);
    
    p.endShape();
  }
});
