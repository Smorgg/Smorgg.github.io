new p5(function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(600, 400);
    canvas.parent('sketch1');
  };

  p.draw = function() {
    p.background(255);

    // 배경
    let grassY = 250;
    let skyH = 150;
    let mountainTop = 60;

    p.noStroke();

    // 잔디
    p.fill(0, 220, 50);
    p.rect(0, grassY, p.width, p.height - grassY);

    // 하늘
    p.fill(0, 100, 130);
    p.rect(0, 0, p.width, skyH);

    // 산
    p.fill(150, 130, 100);
    p.quad(0, p.height, 0, 350, p.width, mountainTop, p.width, p.height);

    // 달
    let sunX = 60,
      sunY = 60,
      sunSize = 100;
    p.fill(240, 230, 140);
    p.ellipse(sunX, sunY, sunSize);

    // 크레이터
    p.fill(144, 94, 1);
    p.ellipse(sunX - 20, sunY - 15, 40, 40);
    p.ellipse(sunX + 20, sunY, 30, 25);
    p.ellipse(sunX - 20, sunY + 20, 25, 27);

    // 망원경
    let mountX      = 300,
      mountY        = 250,
      diffX         = 50 ,
      diffY         = 130;
    let scopeBackY  = 200;
    let scopeFrontX = 200,
      scopeFrontY   = 150;

    // 삼각대
    p.stroke(100);
    p.strokeWeight(6);
    p.line(mountX, mountY, mountX - diffX, mountY + diffY);
    p.line(mountX, mountY, mountX + diffX, mountY + diffY);
    p.line(mountX, mountY, mountX, mountY + diffY);

    // 몸통
    p.noStroke();
    p.fill(180);
    p.quad(
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
    p.fill(100);
    p.rect(mountX, scopeBackY + 5, 30, 20);

    // 렌즈
    p.fill(100, 150, 255);
    p.ellipse(scopeFrontX, scopeFrontY + 15, 10, 30);

    // 고정대
    p.stroke(80);
    p.strokeWeight(4);
    p.line(mountX, scopeBackY, mountX, mountY);

    // 텐트
    let tentBaseY = 300;
    let tentLeftX = 400,
      tentRightX = 560;
    let tentTopY = 150;

    p.noStroke();
    // 앞면 왼 쪽
    p.fill(255, 150, 50);
    p.quad(
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
    p.fill(230, 120, 30);
    p.quad(
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
    p.fill(60, 40, 20);
    p.triangle(
      tentLeftX  + 30,
      tentBaseY,
      tentRightX - 50,
      tentBaseY,
      tentLeftX  + 70,
      tentTopY   + 30
    );

    // 옆면
    p.fill(255, 170, 120);
    p.triangle(
      tentLeftX - 50,
      tentBaseY,
      tentLeftX + 10,
      tentBaseY,
      tentLeftX - 30,
      tentTopY
    );
  };
});
