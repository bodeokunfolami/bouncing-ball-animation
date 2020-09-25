// const progress = document.querySelector('.overlay');

// let counter = 0;
// let timer;

// function step(timestamp) {
//     counter++;
//     progress.style.width = (counter / 100) + "%";

//     if (counter < (100 * 100)) {
//         requestAnimationFrame(step);
//     }
// }



// requestAnimationFrame(step);

const canvas = document.querySelector('#canvas');
const ball = document.querySelector('#ball');
const ctx = canvas.getContext('2d');

let counter = 0;
const ballSize = 100;

let moveY = 0;
let moveX = 0;

let speedX = 5;
let speedY = 4;


function onKeyUp(e) {
    if (e.key === "ArrowRight") {
        console.log(moveX);
        if (moveX + ballSize < canvas.width) {
            moveX += 10;
            update(moveX, moveY);
        }
    } else if (e.key === "ArrowLeft") {

        if (moveX > 0) {
            moveX -= 10;
            update(moveX, moveY);
        }
    } else if (e.key === "ArrowUp") {
        if (moveY > 0) {
            moveY -= 10;
            update(moveX, moveY);
        }

    } else if (e.key === "ArrowDown") {
        if (moveY + ballSize < canvas.height) {
            moveY += 10;
            update(moveX, moveY);
        }

    }
}

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

document.addEventListener('keydown', onKeyUp);


requestAnimationFrame(update);