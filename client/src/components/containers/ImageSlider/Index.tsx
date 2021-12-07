import changeImageAfterATime from './services/changeImageAfterATime';
import ScrollToDown from './components/ScrollToDown/Index';
import Image from './components/Image/Index';
import { useEffect } from 'react';
import './styles.scss';

const ImageSlider = () => {
  useEffect(() => {window.requestAnimationFrame(changeImageAfterATime)}, []);

  return (
    <div className="image-slider" id="image-slider">
      <Image
        className="show"
        description="Os melhores laticínios de feira de Santana, agora tem um site"
        id="image-1"
        title="Laticínios Delivery"
      />
      <Image
        className="hide"
        description="Leites, queijos, requeijão e muito mais! Com preços super baratos, confira já"
        id="image-2"
        title="Preços Acessíveis"
      />
      <Image
        className="hide"
        description="Basta deslizar para baixo para verificar nossos produtos, se gostar de algum adicionen no carrinho :)"
        id="image-3"
        title="Confira Já"
      />
      <ScrollToDown/>
    </div>
  );
}

export default ImageSlider;