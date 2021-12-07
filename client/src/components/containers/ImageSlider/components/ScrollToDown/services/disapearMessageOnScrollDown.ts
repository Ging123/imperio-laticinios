type setter = React.Dispatch<React.SetStateAction<"0" | "1">>;

export default function disapearMessageOnScrollDown(setOpacity:setter) {
  const howMuchScrollDown = window.scrollY;
  if(howMuchScrollDown > 0) return hideMessage(setOpacity);
  showMessage(setOpacity);
}

function hideMessage(setOpacity:setter) {
  setOpacity((opacity:'0'|'1') => {
    if(opacity !== '0') setOpacity('0');
    return opacity;
  });
}

function showMessage(setOpacity:setter) {
  setOpacity((opacity:'0'|'1') => {
    if(opacity === '0') setOpacity('1')
    return opacity;
  });
}