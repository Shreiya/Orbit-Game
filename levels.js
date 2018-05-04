function startMenu() {
  for (let i = 0; i < dusts.length; i++) {
    dusts[i].update(i);
    if (dusts[i].v <= 5) {
      dusts[i].render();
    }
  }


  push();
  translate(width / 2, height / 3);
  translate(-title.width / 2, -title.height / 2);
  tint(255, 255 - fadeIn)
  image(title, 0, 8 * sin(frameCount / 5));
  // sprayTitle.push(new titleTrail(titlePos.x, titlePos.y));
  // for (let i = 0; i < sprayTitle.length; i++) {
  //   sprayTitle[i].update();
  //   sprayTitle[i].render();
  //
  //   if (sprayTitle[i].scale <= 0.1) {
  //     sprayTitle.splice(i, 1);
  //   }
  // }
  pop();

  fadeIn -= 4;

  push();
  translate(width / 2, 2 * height / 3);
  translate(0, 100 * sin(frameCount / 25) + 50 * sin(frameCount / 18));
  scale(5, 5);
  rotate(PI / 20 * cos(frameCount / 25) + PI / 20 * cos(frameCount / 18));
  noStroke();
  rocketDraw();
  pop();

  for (let i = 0; i < dusts.length; i++) {
    if (dusts[i].v > 5) {
      dusts[i].render();
    }
  }

  if (keyIsPressed && keyCode === 32) {
    levelIndex = 1;
    resetAll();
  }
}
//
// class titleTrail {
//   constructor(_x, _y) {
//     this.pos = {
//       x: _x,
//       y: _y
//     };
//     this.scale = 1;
//     this.tint = 255;
//   }
//   update() {
//     this.pos.x -= 2;
//     this.pos.y += this.pos.y / 100;
//     // this.tint -= 255 / 5;
//     this.scale -= 1 / 5;
//   }
//   render() {
//     push()
//     scale(this.scale, this.scale);
//     // tint(255, this.tint);
//     image(title, this.pos.x / this.scale, this.pos.y / this.scale);
//     pop();
//   }
// }

function level1() {
  if (levelFlow.stage == 0) {
    textAlign(CENTER);
    push();
    stroke(255);
    noFill();
    translate(width / 2, height / 3);
    strokeWeight(1);
    scale(1);
    textSize(48);
    text("LEVEL " + levelIndex, 0, 0);
    noStroke();
    fill(240);
    textSize(28);
    text("Try and achieve orbit around this planet.", 0, 80);
    pop();


    levelFlow.titleCountdown -= 1.5;

    if (levelFlow.titleCountdown <= 0) {
      push();
      translate(width / 2 - ready.width / 2, height / 2);
      tint(255, 255 - fadeIn);
      image(ready, 0, 8 * sin(frameCount / 5));
      pop();
      fadeIn -= 4;
      if (keyIsPressed && keyCode === 32) {
        levelFlow.stage = 1;
        resetAll();
      }
    }
  } else if (levelFlow.stage == 1) {
    for (let i = 0; i < 1; i++) {
      planets[i] = new planet(width / 2, height / 2, 50);
      // planets[i] = new planet(random(width), random(height), random(20, 80));
    }

    for (let i = 0; i < 200; i++) {
      dusts[i] = new spaceDust(random(width));
    }
    startPos.x = width / 2;
    startPos.y = 150;
    levelMiddle = true;

  } else if (levelFlow.stage == 2) {
    push();
    translate(width / 2 - success.width / 2, height / 2);
    tint(255, 255 - fadeIn);
    image(success, 0, 8 * sin(frameCount / 5));
    pop();
    fadeIn -= 4;
    levelFlow.successCountdown -= 1;

    if (levelFlow.successCountdown <= 0) {
      levelIndex += 1;
      levelFlow.stage = 0;
      resetAll();
    }
  }
}

function level2() {
  if (levelFlow.stage == 0) {
    textAlign(CENTER);
    push();
    stroke(255);
    noFill();
    translate(width / 2, height / 3);
    strokeWeight(1);
    scale(1);
    textSize(48);
    text("LEVEL " + levelIndex, 0, 0);
    noStroke();
    fill(240);
    textSize(28);
    text("Try and achieve orbit around this planet.", 0, 80);
    pop();


    levelFlow.titleCountdown -= 1.5;

    if (levelFlow.titleCountdown <= 0) {
      push();
      translate(width / 2 - ready.width / 2, height / 2);
      tint(255, 255 - fadeIn);
      image(ready, 0, 8 * sin(frameCount / 5));
      pop();
      fadeIn -= 4;
      if (keyIsPressed && keyCode === 32) {
        levelFlow.stage = 1;
        resetAll();
      }
    }
  } else if (levelFlow.stage == 1) {
    for (let i = 0; i < 1; i++) {
      planets[i] = new planet(width / 2, height / 2, 100);
    }

    for (let i = 0; i < 200; i++) {
      dusts[i] = new spaceDust(random(width));
    }
    startPos.x = 5 * width / 6;
    startPos.y = 150;
    levelMiddle = true;

  } else if (levelFlow.stage == 2) {
    push();
    translate(width / 2 - success.width / 2, height / 2);
    tint(255, 255 - fadeIn);
    image(success, 0, 8 * sin(frameCount / 5));
    pop();
    fadeIn -= 4;
    levelFlow.successCountdown -= 1;

    if (levelFlow.successCountdown <= 0) {
      levelIndex += 1;
      levelFlow.stage = 0;
      resetAll();
    }
  }
}