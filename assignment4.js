new p5(function(p) {
  p.setup = function() {
    let canvas = p.createCanvas(360, 240);
    canvas.parent('sketch4');
  };

  p.draw = function() {
    p.background(255);

    let t = p.millis() / 1000;
    let angle = (t * p.TWO_PI) / 5;

    let centerX = p.width * 0.5;
    let centerY = p.height * 0.5;
    let radius = p.width * 0.25;

    let sunX = centerX + p.cos(angle) * radius;
    let sunY = centerY + p.sin(angle) * radius;

    let moonX = centerX + p.cos(angle + p.PI) * radius;
    let moonY = centerY + p.sin(angle + p.PI) * radius;

    let isDay = sunY < p.height * 0.2;

    let grassY = p.height * 0.625;
    let skyH = grassY;
    let mountainTop = p.height * 0.15;

    p.noStroke();

    let skyTransition = p.map(sunY, -50, 250, 0, 1);
    skyTransition = p.constrain(skyTransition, 0, 1);

    let dayR = 135, dayG = 206, dayB = 235;
    let nightR = 0, nightG = 20, nightB = 80;

    let skyR = p.lerp(dayR, nightR, skyTransition);
    let skyG = p.lerp(dayG, nightG, skyTransition);
    let skyB = p.lerp(dayB, nightB, skyTransition);

    p.fill(skyR, skyG, skyB);
    p.rect(0, 0, p.width, skyH);

    if (!isDay) {
      for (let i = 0; i < 8; i++) {
        let starX = p.map(i, 0, 7, p.width * 0.08, p.width * 0.92);
        let starY = p.height * 0.09 + p.sin(t * 2 + i) * (p.height * 0.03);
        let starSize = (2 + p.abs(p.sin(t * 3 + i)) * 2) * (p.width / 600);
        let starAlpha = p.map(skyTransition, 0.3, 1, 0, 255);
        p.fill(255, 255, 200, starAlpha);
        p.ellipse(starX, starY, starSize * 2, starSize * 2);
      }
    }

    if (sunY < grassY + p.height * 0.25) {
      let sunSize = p.width * 0.1667 + p.sin(t * 3) * (p.width * 0.008);

      for (let i = 0; i < 8; i++) {
        let rayAngle = (p.TWO_PI / 8) * i + t;
        let rayLength = p.width * 0.1 + p.sin(t * 2 + i) * (p.width * 0.016);
        p.stroke(255, 200, 0, 100);
        p.strokeWeight(2 * (p.width / 600));
        p.line(sunX, sunY, sunX + p.cos(rayAngle) * rayLength, sunY + p.sin(rayAngle) * rayLength);
      }

      p.noStroke();
      p.fill(255, 220, 0);
      p.ellipse(sunX, sunY, sunSize);

      p.fill(255, 240, 100);
      p.ellipse(sunX, sunY, sunSize * 0.7);
    }

    if (moonY < grassY + p.height * 0.125) {
      let moonSize = p.width * 0.1667 + p.sin(t * 5) * (p.width * 0.013);

      let moonColorShift = p.abs(p.sin(t * 0.8)) * 20;
      p.fill(240 - moonColorShift, 230 - moonColorShift, 140 + moonColorShift);
      p.ellipse(moonX, moonY, moonSize);

      p.fill(144, 94, 1);
      p.ellipse(moonX - p.width * 0.033, moonY - p.height * 0.047, p.width * 0.067, p.height * 0.125);
      p.ellipse(moonX + p.width * 0.033, moonY, p.width * 0.05, p.height * 0.078);
      p.ellipse(moonX - p.width * 0.033, moonY + p.height * 0.063, p.width * 0.042, p.height * 0.068);
    }

    p.fill(0, 220, 50);
    p.rect(0, grassY, p.width, p.height - grassY);

    p.fill(150, 130, 100);
    p.quad(0, p.height, 0, p.height * 0.875, p.width, mountainTop, p.width, p.height);

    let mountX = p.width * 0.5;
    let mountY = grassY;
    let diffX = p.width * 0.0833;
    let diffY = p.height * 0.325;
    let scopeBackY = p.height * 0.5;
    let scopeAngle = p.sin(t * 1.5) * 0.1;
    let scopeFrontX = mountX - p.width * 0.1667 + p.cos(scopeAngle) * (p.width * 0.033);
    let scopeFrontY = p.height * 0.375 + p.sin(scopeAngle) * (p.height * 0.03);

    p.stroke(100);
    p.strokeWeight(6 * (p.width / 600));
    p.line(mountX, mountY, mountX - diffX, mountY + diffY);
    p.line(mountX, mountY, mountX + diffX, mountY + diffY);
    p.line(mountX, mountY, mountX, mountY + diffY);

    p.noStroke();
    p.fill(180);
    p.quad(mountX, scopeBackY, mountX, scopeBackY + p.height * 0.094, scopeFrontX, scopeFrontY + p.height * 0.094, scopeFrontX, scopeFrontY);

    p.fill(100);
    p.rect(mountX, scopeBackY + p.height * 0.016, p.width * 0.05, p.height * 0.063);

    let lensGlow = p.abs(p.sin(t * 4)) * 100;
    p.fill(100 + lensGlow, 150 + lensGlow * 0.5, 255);
    p.ellipse(scopeFrontX, scopeFrontY + p.height * 0.047, p.width * 0.017, p.height * 0.094);

    p.stroke(80);
    p.strokeWeight(4 * (p.width / 600));
    p.line(mountX, scopeBackY, mountX, mountY);

    p.noStroke();
    let fireX = p.width * 0.8;
    let fireY = p.height * 0.825;
    let fireFlicker = p.random(-p.height * 0.031, p.height * 0.022);

    p.fill(255, 100 + p.random(50), 0, 200);
    p.triangle(fireX, fireY + fireFlicker, fireX - p.width * 0.058, fireY + p.height * 0.063, fireX + p.width * 0.058, fireY + p.height * 0.063);

    p.fill(255, 200, 0, 150);
    p.triangle(fireX, fireY + p.height * 0.016 + fireFlicker, fireX - p.width * 0.05, fireY + p.height * 0.063, fireX + p.width * 0.05, fireY + p.height * 0.063);

    p.stroke(80, 50, 20);
    p.strokeWeight(4 * (p.width / 600));
    p.line(fireX - p.width * 0.0833, fireY + p.height * 0.063, fireX + p.width * 0.0833, fireY + p.height * 0.063);
    p.line(fireX - p.width * 0.058, fireY + p.height * 0.078, fireX + p.width * 0.058, fireY + p.height * 0.078);

    p.noStroke();
    let tentBaseY = p.height * 0.75;
    let tentLeftX = p.width * 0.6667;
    let tentRightX = p.width * 0.9333;
    let tentTopY = p.height * 0.375;

    let tentGlow = p.abs(p.sin(t * 2.5)) * 10;

    p.fill(255 + tentGlow, 150 + tentGlow, 50);
    p.quad(tentLeftX, tentBaseY, tentLeftX + p.width * 0.1333, tentBaseY, tentLeftX + p.width * 0.0833, tentTopY, tentLeftX - p.width * 0.05, tentTopY);

    p.fill(230 + tentGlow, 120 + tentGlow, 30);
    p.quad(tentLeftX + p.width * 0.1333, tentBaseY, tentRightX, tentBaseY, tentRightX - p.width * 0.05, tentTopY, tentLeftX + p.width * 0.0833, tentTopY);

    let doorGlow = p.abs(p.sin(t * 2.5)) * 100;
    p.fill(60 + doorGlow, 40 + doorGlow * 0.5, 20);
    p.triangle(tentLeftX + p.width * 0.05, tentBaseY, tentRightX - p.width * 0.0833, tentBaseY, tentLeftX + p.width * 0.1167, tentTopY + p.height * 0.094);

    p.fill(255 + tentGlow, 170 + tentGlow, 120);
    p.triangle(tentLeftX - p.width * 0.0833, tentBaseY, tentLeftX + p.width * 0.0167, tentBaseY, tentLeftX - p.width * 0.05, tentTopY);
  };
});
