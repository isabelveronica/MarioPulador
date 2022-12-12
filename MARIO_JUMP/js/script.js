const mario = document.querySelector('.mario');
const planta = document.querySelector('.planta');
const clouds = document.querySelector('.clouds');
const som = new Audio();
//const som = AnimationPlaybackEvent
const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {
  const plantaPosition = planta.offsetLeft;

  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  const cloudsPosition = +window
    .getComputedStyle(clouds)
    .left.replace('px', '');

  if (plantaPosition <= 120 && plantaPosition > 0 && marioPosition < 80) {
    planta.style.animation = 'none';
    planta.style.left = `${plantaPosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clouds.style.animation = 'clouds 20s infinit linear';
    clouds.style.left = `${cloudsPosition}px`;

    som.src = './sounds/Mario_Game_Over.mp3';
    som.play();

    gameOver.style.visibility = 'visible';

    clearInterval(loop);
  }
}, 10);

const restart = () => {
  gameOver.style.visibility = 'hidden';

  planta.style.animation = 'planta-animation 1.5s infinite linear';
  planta.style.left = ``;

  mario.src = './images/mario.gif';
  mario.style.width = '150px';
  mario.style.bottom = '0px';
  mario.style.marginLeft = '';
  mario.style.animation = '';

  clouds.style.left = ``;

  const loop = setInterval(() => {
    const plantaPosition = planta.offsetLeft;

    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace('px', '');

    const cloudsPosition = +window
      .getComputedStyle(clouds)
      .left.replace('px', '');

    console.log(marioPosition);

    if (plantaPosition <= 120 && plantaPosition > 0 && marioPosition < 80) {
      planta.style.animation = 'none';
      planta.style.left = `${plantaPosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      mario.src = './images/game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';

      clouds.style.animation = 'clouds 20s infinit linear';
      clouds.style.left = `${cloudsPosition}px`;

      som.src = './sounds/Mario_Game_Over.mp3';
      som.play();

      gameOver.style.visibility = 'visible';

      clearInterval(loop);
    }
  }, 10);
};

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);
