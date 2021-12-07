import disapearMessageOnScrollDown from './services/disapearMessageOnScrollDown';
import { useEffect, useState } from 'react';
import './styles.scss';

const ScrollToDown = () => {
  const [opacity, setOpacity] = useState<"0"|"1">("1");
  useEffect(() => {
    window.onscroll = () => disapearMessageOnScrollDown(setOpacity);
  }, []);

  return (
    <div className="scroll-down-message" style={{ opacity:opacity }}>
      <div>Arraste para baixo para ver mais</div>
      <i className="fas fa-chevron-down"/>
    </div>
  );
}

export default ScrollToDown;