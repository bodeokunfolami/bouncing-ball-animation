const canvas = document.querySelector('#canvas');
const ball = document.querySelector('#ball');
const ctx = canvas.getContext('2d');

let counter = 0;
const ballSize = 100;

let moveY = 0;
let moveX = 0;

let speedX = 5;
let speedY = 4;


function update() {

    moveX += speedX;
    moveY += speedY;

    if (moveX + ballSize > canvas.width || moveX < 0) {
        speedX = -speedX;
    }
    if (moveY + ballSize > canvas.height || moveY < 0) {
        speedY = -speedY;
    }


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(ball, moveX, moveY, ballSize, ballSize);






    requestAnimationFrame(update);


}


requestAnimationFrame(update);