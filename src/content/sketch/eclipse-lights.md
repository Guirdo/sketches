---
title: "Eclipse Lights"
tags: ["eclipse"]
description: "Animation of the lights projected on April 8th 2024 eclipse"
date: 2024-04-13
---

<script>
let lights = [];

function setup() {
  createCanvas(600, 500,"canvas");

  createLights()

  frameRate(1);
}

function createLights(){
  lights = [];

  let amount = floor(random(7, 15));

  for (i = 0; i < amount; i++) {
    let x = floor(random(0, width));
    let y = floor(random(0, height));
    let s = floor(random(20, 50));

    lights.push(new Light(x, y, s));
  }
}

/*function mousePressed() {
  let s = floor(random(20, 50));
  lights.push(new Light(mouseX, mouseY, s));
}
*/

function draw() {
  background(0);

  translate(50-width/2, -height/2)
  for (i = 0; i < lights.length; i++) {
    lights[i].show();
  }
  
  createLights()
}

class Light {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  show() {
    // Compute the noise values.
    let currentX = width * noise(0.005) + this.x
    let currentY = height * noise(0.005 + 10000) + this.y;
    let currentS = this.s

    //Clip
    push();
    beginClip();
    circle(currentX, currentY, currentS);
    endClip();
    pop();
    push();
    beginClip({ invert: true });
    circle(currentX + 10, currentY - 5, currentS);
    endClip();

    //Light
    fill(255);
    circle(currentX, currentY, currentS);
    pop();
  }
}

</script>
