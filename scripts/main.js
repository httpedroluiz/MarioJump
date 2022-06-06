const clouds = document.querySelector('.clouds');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500)
}

const loop = setInterval(() => {

    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pipePosition = pipe.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { 

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '7.5rem';
        mario.style.marginLeft = '5rem';

        clouds.style.animation = 'none'; 
        clouds.style.left = `${cloudsPosition}px`;
    }
}, 10);

document.addEventListener('keydown', jump);