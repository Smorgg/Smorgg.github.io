function setup() {
  createCanvas(600, 400);
  canvas.parent('sketch2');
}

function draw() {
  background(0, 200, 150);
  
  noStroke();
  fill(0);
  ellipse(300, 173, 230, 230);
  fill(244, 217, 203);
  ellipse(300, 200, 210, 230);
  
    // 눈의 위치와 크기
  let cx = 250;
  let cy = 180;
  let w = 60;
  let h = 30;

  // 흰자
  fill(255);
  ellipse(cx, cy, w, h);
  let cx2 = 350;
  ellipse(cx2, cy, w, h);

  // 동공(고정 위치)
  fill(0);
  ellipse(cx, cy, h * 0.8, h * 0.8);  
  ellipse(cx2, cy, h * 0.8, h * 0.8);
  
  noFill();
  // 반복 간격 설정
  let spacingX = 3; // 가로 간격

  
  // 격자 형태로 곡선 반복
  for (let x = 260; x < 330; x += spacingX) {
      drawLefthair(x, 180);
  }
  for (let x = 280; x < 330; x += spacingX) {
      drawRighthair(x, 180);
  }
  
  
  fill(0);
  beginShape();
  curveVertex(80, 400);
  curveVertex(80, 400);
  vertex(100, 370);
  vertex(220, 350);
  vertex(380, 350);
  vertex(500, 370);
  vertex(520, 400);
  vertex(520, 400);
  
  endShape();
  
  fill(0);
  triangle(300, 94, 280, 80, 330, 75);
  
  stroke(255, 230, 203);
  fill(255, 230, 203);
  triangle(300, 180, 290, 220, 310, 220);
  
  noStroke();

  fill(244, 217, 203);
  beginShape();
  curveVertex(330, 400);
  curveVertex(330, 400);
  
  curveVertex(325, 350);

  curveVertex(330, 280);
  curveVertex(270, 280);
  
  curveVertex(275, 350);
  
  curveVertex(270, 400);
  curveVertex(270, 400);

  // Stop drawing the shape.
  endShape();
  
  stroke(0);
  noFill();
  arc(300, 250, 80, 60, 0, PI);
  
  noStroke();
  fill(0);
  beginShape();
  curveVertex(340, 400);
  curveVertex(340, 400);
  curveVertex(340, 380);

  
  curveVertex(300, 385);

  curveVertex(260, 380);
  
  curveVertex(260, 400);
  curveVertex(260, 400);
  
  endShape();

  

}

function drawLefthair(offsetX, offsetY) {
  // 원본 앵커 포인트들 (상대 좌표)
  let pts = [
    [0, -110],    // 원점 기준으로 조정
    [-60, -120],
    [-50, -20],
    [-100, 0]
  ];
  
  // 곡선 그리기
  stroke(0);
  strokeWeight(3);
  beginShape();
  
  // 첫 번째 점을 제어점으로 사용
  curveVertex(pts[0][0] + offsetX, pts[0][1] + offsetY);
  curveVertex(pts[0][0] + offsetX, pts[0][1] + offsetY);
  
  // 모든 앵커 포인트를 곡선에 추가
  for (let i = 0; i < pts.length; i++) {
    curveVertex(pts[i][0] + offsetX, pts[i][1] + offsetY);
  }
  
  // 마지막 점을 제어점으로 사용
  let lastIdx = pts.length - 1;
  curveVertex(pts[lastIdx][0] + offsetX, pts[lastIdx][1] + offsetY);
  curveVertex(pts[lastIdx][0] + offsetX, pts[lastIdx][1] + offsetY);
  
  endShape();
}

function drawRighthair(offsetX, offsetY) {
  // 원본 앵커 포인트들 (상대 좌표)
  let pts = [
    [0, -110],    // 원점 기준으로 조정
    [60, -120],
    [50, -20],
    [100, 0]
  ];
  
  // 곡선 그리기
  stroke(0);
  strokeWeight(3);
  beginShape();
  
  // 첫 번째 점을 제어점으로 사용
  curveVertex(pts[0][0] + offsetX, pts[0][1] + offsetY);
  curveVertex(pts[0][0] + offsetX, pts[0][1] + offsetY);
  
  // 모든 앵커 포인트를 곡선에 추가
  for (let i = 0; i < pts.length; i++) {
    curveVertex(pts[i][0] + offsetX, pts[i][1] + offsetY);
  }
  
  // 마지막 점을 제어점으로 사용
  let lastIdx = pts.length - 1;
  curveVertex(pts[lastIdx][0] + offsetX, pts[lastIdx][1] + offsetY);
  curveVertex(pts[lastIdx][0] + offsetX, pts[lastIdx][1] + offsetY);
  
  endShape();

}
