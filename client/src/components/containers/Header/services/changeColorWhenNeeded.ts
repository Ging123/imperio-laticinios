export default function changeColorWhenNeeded() {
  const containerHeight = document.getElementById('image-slider')!.offsetHeight;
  const windowsPosition = window.scrollY;
  if(windowsPosition >= containerHeight) return showHeaderBackground();
  hideHeaderBackground();
}

function showHeaderBackground() {
  const header = document.getElementById('header')!;
  header.style.background = '#000000e5';
  header.style.color = 'white';
  header.style.boxShadow = '1px 1px 5px black';
}

function hideHeaderBackground() {
  const header = document.getElementById('header')!;
  header.style.background = 'transparent';
  header.style.color = 'white';
  header.style.boxShadow = '1px 1px 5px #0000000e';
}