import {SNAKE_SPEED, update as updateSnake, draw as drawSnake} from "./snake";
import {} from "./snake";

let lastRenderTime = 0;


function main(currentTime) {

    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if (secondSinceLastRender < 1 / SNAKE_SPEED) return;
    requestAnimationFrame(main);
    lastRenderTime = currentTime;

    // console.log(currentTime);

    update();

    draw();
}

function update() {
    updateSnake();  
}

function draw() {
    drawSnake();
}

requestAnimationFrame(main);