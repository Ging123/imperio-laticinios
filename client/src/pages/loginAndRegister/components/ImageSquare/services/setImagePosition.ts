export default function setImagePosition(path:string) {
  console.log(path)
  if(path === '/') return moveImageToRight();
  if(path === '/register/email') return moveImageToLeft();
}

const moveImageToRight = () => image().style.right = '0px';

const moveImageToLeft = () => image().style.right = '50%';

const image = () => document.getElementById('image-square')!;