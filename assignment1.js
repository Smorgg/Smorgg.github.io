function setup() {
  createCanvas(600, 400);
  canvas.parent('sketch1');
}

function draw() {
  background(255);

  // 배경
  let grassY = 250;
  let skyH = 150;
  let mountainTop = 60;

  noStroke();

  // 잔디
  fill(0, 220, 50);
  rect(0, grassY, width, height - grassY);

  // 하늘
  fill(0, 100, 130);
  rect(0, 0, width, skyH);

  // 산
  fill(150, 130, 100);
  quad(0, height, 0, 350, width, mountainTop, width, height);

  // 달
  let sunX = 60,
    sunY = 60,
    sunSize = 100;
  fill(240, 230, 140);
  ellipse(sunX, sunY, sunSize);

  // 크레이터
  fill(144, 94, 1);
  ellipse(sunX - 20, sunY - 15, 40, 40);
  ellipse(sunX + 20, sunY, 30, 25);
  ellipse(sunX - 20, sunY + 20, 25, 27);

  // 망원경
  let mountX      = 300,
    mountY        = 250,
    diffX         = 50 ,
    diffY         = 130;
  let scopeBackY  = 200;
  let scopeFrontX = 200,
    scopeFrontY   = 150;

  // 삼각대
  stroke(100);
  strokeWeight(6);
  line(mountX, mountY, mountX - diffX, mountY + diffY);
  line(mountX, mountY, mountX + diffX, mountY + diffY);
  line(mountX, mountY, mountX, mountY + diffY);

  // 몸통
  noStroke();
  fill(180);
  quad(
    mountX,
    scopeBackY,
    mountX,
    scopeBackY  + 30,
    scopeFrontX,
    scopeFrontY + 30,
    scopeFrontX,
    scopeFrontY
  );

  // 아이피스
  fill(100);
  rect(mountX, scopeBackY + 5, 30, 20);

  // 렌즈
  fill(100, 150, 255);
  ellipse(scopeFrontX, scopeFrontY + 15, 10, 30);

  // 고정대
  stroke(80);
  strokeWeight(4);
  line(mountX, scopeBackY, mountX, mountY);

  // 텐트
  let tentBaseY = 300;
  let tentLeftX = 400,
    tentRightX = 560;
  let tentTopY = 150;

  noStroke();
  // 앞면 왼 쪽
  fill(255, 150, 50);
  quad(
    tentLeftX,
    tentBaseY,
    tentLeftX + 80,
    tentBaseY,
    tentLeftX + 50,
    tentTopY,
    tentLeftX - 30,
    tentTopY
  );

  // 앞면 오른 쪽
  fill(230, 120, 30);
  quad(
    tentLeftX  + 80,
    tentBaseY,
    tentRightX,
    tentBaseY,
    tentRightX - 30,
    tentTopY,
    tentLeftX  + 50,
    tentTopY
  );

  // 입구
  fill(60, 40, 20);
  triangle(
    tentLeftX  + 30,
    tentBaseY,
    tentRightX - 50,
    tentBaseY,
    tentLeftX  + 70,
    tentTopY   + 30
  );

  // 옆면
  fill(255, 170, 120);
  triangle(
    tentLeftX - 50,
    tentBaseY,
    tentLeftX + 10,
    tentBaseY,
    tentLeftX - 30,
    tentTopY
  );
}

function mousePressed() {
}


