function setup() {
  createCanvas(360, 240);
  canvas.parent('sketch4');
}

function draw() {
  background(255);

  // 시간 변수
  let t = millis() / 1000; // 초 단위

  // 회전 각도 (5초에 한 바퀴)
  let angle = (t * TWO_PI) / 5;

  let centerX = width * 0.5;
  let centerY = height * 0.5;
  let radius = width * 0.25;

  let sunX = centerX + cos(angle) * radius;
  let sunY = centerY + sin(angle) * radius;

  let moonX = centerX + cos(angle + PI) * radius;
  let moonY = centerY + sin(angle + PI) * radius;

  // 낮/밤
  let isDay = sunY < height * 0.2;

  // 배경
  let grassY = height * 0.625;
  let skyH = grassY;
  let mountainTop = height * 0.15;

  noStroke();

  // 하늘
  let skyTransition = map(sunY, -50, 250, 0, 1);
  skyTransition = constrain(skyTransition, 0, 1);

  let dayR = 135, dayG = 206, dayB = 235; // 낮
  let nightR = 0, nightG = 20, nightB = 80; // 밤

  let skyR = lerp(dayR, nightR, skyTransition);
  let skyG = lerp(dayG, nightG, skyTransition);
  let skyB = lerp(dayB, nightB, skyTransition);

  fill(skyR, skyG, skyB);
  rect(0, 0, width, skyH);

  // 별
  if (!isDay) {
    for (let i = 0; i < 8; i++) {
      let starX = map(i, 0, 7, width * 0.08, width * 0.92);
      let starY = height * 0.09 + sin(t * 2 + i) * (height * 0.03);
      let starSize = (2 + abs(sin(t * 3 + i)) * 2) * (width / 600);
      let starAlpha = map(skyTransition, 0.3, 1, 0, 255);
      fill(255, 255, 200, starAlpha);
      ellipse(starX, starY, starSize * 2, starSize * 2);
    }
  }

  // 해 그리기
  if (sunY < grassY + height * 0.25) {
    let sunSize = width * 0.1667 + sin(t * 3) * (width * 0.008);

    // 태양광
    for (let i = 0; i < 8; i++) {
      let rayAngle = (TWO_PI / 8) * i + t;
      let rayLength = width * 0.1 + sin(t * 2 + i) * (width * 0.016);
      stroke(255, 200, 0, 100);
      strokeWeight(2 * (width / 600));
      line(sunX, sunY, sunX + cos(rayAngle) * rayLength, sunY + sin(rayAngle) * rayLength);
    }

    noStroke();
    fill(255, 220, 0);
    ellipse(sunX, sunY, sunSize);

    fill(255, 240, 100);
    ellipse(sunX, sunY, sunSize * 0.7);
  }

  // 달 그리기
  if (moonY < grassY + height * 0.125) {
    let moonSize = width * 0.1667 + sin(t * 5) * (width * 0.013);

    // 달 색상 변화
    let moonColorShift = abs(sin(t * 0.8)) * 20;
    fill(240 - moonColorShift, 230 - moonColorShift, 140 + moonColorShift);
    ellipse(moonX, moonY, moonSize);

    // 크레이터
    fill(144, 94, 1);
    ellipse(moonX - width * 0.033, moonY - height * 0.047, width * 0.067, height * 0.125);
    ellipse(moonX + width * 0.033, moonY, width * 0.05, height * 0.078);
    ellipse(moonX - width * 0.033, moonY + height * 0.063, width * 0.042, height * 0.068);
  }

  // 잔디
  fill(0, 220, 50);
  rect(0, grassY, width, height - grassY);

  // 산
  fill(150, 130, 100);
  quad(0, height, 0, height * 0.875, width, mountainTop, width, height);

  // 망원경
  let mountX = width * 0.5;
  let mountY = grassY;
  let diffX = width * 0.0833;
  let diffY = height * 0.325;
  let scopeBackY = height * 0.5;
  let scopeAngle = sin(t * 1.5) * 0.1;
  let scopeFrontX = mountX - width * 0.1667 + cos(scopeAngle) * (width * 0.033);
  let scopeFrontY = height * 0.375 + sin(scopeAngle) * (height * 0.03);

  // 삼각대
  stroke(100);
  strokeWeight(6 * (width / 600));
  line(mountX, mountY, mountX - diffX, mountY + diffY);
  line(mountX, mountY, mountX + diffX, mountY + diffY);
  line(mountX, mountY, mountX, mountY + diffY);

  // 몸통
  noStroke();
  fill(180);
  quad(mountX, scopeBackY, mountX, scopeBackY + height * 0.094, scopeFrontX, scopeFrontY + height * 0.094, scopeFrontX, scopeFrontY);

  // 아이피스
  fill(100);
  rect(mountX, scopeBackY + height * 0.016, width * 0.05, height * 0.063);

  // 렌즈
  let lensGlow = abs(sin(t * 4)) * 100;
  fill(100 + lensGlow, 150 + lensGlow * 0.5, 255);
  ellipse(scopeFrontX, scopeFrontY + height * 0.047, width * 0.017, height * 0.094);

  // 고정대
  stroke(80);
  strokeWeight(4 * (width / 600));
  line(mountX, scopeBackY, mountX, mountY);

  // 캠프파이어
  noStroke();
  let fireX = width * 0.8;
  let fireY = height * 0.825;
  let fireFlicker = random(-height * 0.031, height * 0.022);

  // 불꽃 외곽
  fill(255, 100 + random(50), 0, 200);
  triangle(fireX, fireY + fireFlicker, fireX - width * 0.058, fireY + height * 0.063, fireX + width * 0.058, fireY + height * 0.063);

  // 불꽃 내부
  fill(255, 200, 0, 150);
  triangle(fireX, fireY + height * 0.016 + fireFlicker, fireX - width * 0.05, fireY + height * 0.063, fireX + width * 0.05, fireY + height * 0.063);

  // 장작
  stroke(80, 50, 20);
  strokeWeight(4 * (width / 600));
  line(fireX - width * 0.0833, fireY + height * 0.063, fireX + width * 0.0833, fireY + height * 0.063);
  line(fireX - width * 0.058, fireY + height * 0.078, fireX + width * 0.058, fireY + height * 0.078);

  // 텐트
  noStroke();
  let tentBaseY = height * 0.75;
  let tentLeftX = width * 0.6667;
  let tentRightX = width * 0.9333;
  let tentTopY = height * 0.375;

  // 텐트 색상 변화
  let tentGlow = abs(sin(t * 2.5)) * 10;

  // 앞면 왼쪽
  fill(255 + tentGlow, 150 + tentGlow, 50);
  quad(tentLeftX, tentBaseY, tentLeftX + width * 0.1333, tentBaseY, tentLeftX + width * 0.0833, tentTopY, tentLeftX - width * 0.05, tentTopY);

  // 앞면 오른쪽
  fill(230 + tentGlow, 120 + tentGlow, 30);
  quad(tentLeftX + width * 0.1333, tentBaseY, tentRightX, tentBaseY, tentRightX - width * 0.05, tentTopY, tentLeftX + width * 0.0833, tentTopY);

  // 입구
  let doorGlow = abs(sin(t * 2.5)) * 100;
  fill(60 + doorGlow, 40 + doorGlow * 0.5, 20);
  triangle(tentLeftX + width * 0.05, tentBaseY, tentRightX - width * 0.0833, tentBaseY, tentLeftX + width * 0.1167, tentTopY + height * 0.094);

  // 옆면
  fill(255 + tentGlow, 170 + tentGlow, 120);
  triangle(tentLeftX - width * 0.0833, tentBaseY, tentLeftX + width * 0.0167, tentBaseY, tentLeftX - width * 0.05, tentTopY);
}



