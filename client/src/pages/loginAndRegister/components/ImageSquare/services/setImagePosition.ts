export default function setImagePosition(path:string) {
  if(path === '/start') return moveImageToRight();
  if(path === '/start/register/email') return moveImageToLeft();
}

const moveImageToRight = () => image().style.right = '0px';

const moveImageToLeft = () => image().style.right = '50%';

const image = () => document.getElementById('image-square')!;