var time = 0;
var currentImageOpen = 0;
const timeLimit = 800;

export default function changeImageAfterATime() {
  if(IsNotInLoginOrRegisterPages()) return;
  countOneMillisecond();
  if(time === timeLimit) changeImage();
  callback();
}

function IsNotInLoginOrRegisterPages() {
  const currentPath = window.location.pathname;
  if(currentPath === '/start') return false;
  if (currentPath === '/start/register/email') return false;
  return true; 
}

const countOneMillisecond = () => time++;

const callback = () => requestAnimationFrame(changeImageAfterATime);

function changeImage() {
  resetTime();
  currentImageOpen++;
  if(isLastImage()) return goToFirstImage();
  goToNextImage();
}

const resetTime = () => time = 0;

const isLastImage = () => currentImageOpen === lastImage();

const lastImage = () => document.querySelectorAll('#image-square > img').length;

function goToFirstImage() {
  const images = document.querySelectorAll('#image-square > img');
  const first = 0;
  const last = lastImage() - 1;
  images[first].className = 'show';
  images[last].className = 'hide';
  currentImageOpen = 0;
}

function goToNextImage() {
  const images = document.querySelectorAll('#image-square > img');
  const oldImageOpen = currentImageOpen - 1;
  images[oldImageOpen].className = 'hide';
  images[currentImageOpen].className = 'show';
}