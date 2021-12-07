var time = 0;
var currentImageOpen = 0;
const timeLimit = 800;

export default function changeImageAfterATime() {
  if(IsNotInProductsPage()) return;
  countOneMillisecond();
  if(time === timeLimit) changeImage();
  callback();
}

function IsNotInProductsPage() {
  const currentPath = window.location.pathname;
  if(currentPath !== '/products') return true;
  return false; 
}

const countOneMillisecond = () => time++;

function changeImage() {
  resetTime();
  currentImageOpen++;
  if(isLastImage()) return goToFirstImage();
  goToNextImage();
}

const resetTime = () => time = 0;

const isLastImage = () => currentImageOpen === lastImage();

const lastImage = () => document.querySelectorAll('.container-of-image-to-slide').length;

async function goToFirstImage() {
  showFirstImage();
  moveDescriptionToDown();
  await sleep(1000);
  moveDescriptionToUp();
  hideOldImage();
  currentImageOpen = 0;
}

async function goToNextImage() {
  showNextImage();
  moveDescriptionToDown();
  await sleep(1000);
  moveDescriptionToUp();
  hideOldImage();
}

function showNextImage() {
  const images = document.querySelectorAll('.container-of-image-to-slide');
  const oldImageOpen = currentImageOpen - 1;
  images[currentImageOpen].className = 'container-of-image-to-slide show';
  images[oldImageOpen].className = 'container-of-image-to-slide must-hide';
}

function showFirstImage() {
  const images = document.querySelectorAll('.container-of-image-to-slide');
  const oldImageOpen = currentImageOpen - 1;
  const first = 0;
  images[first].className = 'container-of-image-to-slide show';
  images[oldImageOpen].className = 'container-of-image-to-slide must-hide';
}

function hideOldImage() {
  const images = document.querySelectorAll('.container-of-image-to-slide');
  const oldImageOpen = currentImageOpen - 1;
  images[oldImageOpen].className = 'container-of-image-to-slide hide';
}

function moveDescriptionToUp() {
  let imageToMove = currentImageOpen;
  const firstImage = 0;
  if(currentImageOpen === lastImage()) imageToMove = firstImage;
  const titles = document.querySelectorAll('.title-of-image-to-slide');
  const description = document.querySelectorAll('.description-of-image-to-slide');
  titles[imageToMove].className = 'title-of-image-to-slide show';
  description[imageToMove].className = 'description-of-image-to-slide show';
}

function moveDescriptionToDown() {
  const imageToMove = currentImageOpen - 1
  const titles = document.querySelectorAll('.title-of-image-to-slide');
  const description = document.querySelectorAll('.description-of-image-to-slide');
  titles[imageToMove].className = 'title-of-image-to-slide';
  description[imageToMove].className = 'description-of-image-to-slide';
}

const sleep = (m:number) => new Promise(r => setTimeout(r, m))

const callback = () => requestAnimationFrame(changeImageAfterATime);