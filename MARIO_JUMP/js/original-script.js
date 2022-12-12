const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const playSom = elemento => {
  const element = document.querySelector(`#${elemento}`);

  element.play();
};

const stopSom = elemento => {
  const element = document.querySelector(`#${elemento}`);

  element.pause();
};

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;

  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  const cloudsPosition = +window
    .getComputedStyle(clouds)
    .left.replace('px', '');

  console.log(marioPosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clouds.style.animation = 'clouds 20s infinit linear';
    clouds.style.left = `${cloudsPosition}px`;

    gameOver.style.visibility = 'visible';

    clearInterval(loop);
  }
}, 10);

const restart = () => {
  gameOver.style.visibility = 'hidden';

  pipe.style.animation = 'pipe-animation 1.5s infinite linear';
  pipe.style.left = ``;

  mario.src = './images/mario.gif';
  mario.style.width = '150px';
  mario.style.bottom = '0px';
  mario.style.marginLeft = '';
  mario.style.animation = '';

  clouds.style.left = ``;

  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace('px', '');

    const cloudsPosition = +window
      .getComputedStyle(clouds)
      .left.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = './images/game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';

      clouds.style.animation = 'clouds 20s infinit linear';
      clouds.style.left = `${cloudsPosition}px`;

      gameOver.style.visibility = 'visible';

      clearInterval(loop);
    }
  }, 10);
};

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);
