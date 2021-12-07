import changeImageAfterATime from './services/changeImageAfterATime';
import Modal from '../../../../components/containers/Modal/Index';
import setImagePosition from './services/setImagePosition';
import Images from './components/Images/Index';
import { useLocation } from 'react-router';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import './styles.scss'; 

const ImageSquare = () => {
  const location = useLocation();
  useEffect(() => { window.requestAnimationFrame(changeImageAfterATime)} , []);
  useEffect(() => { setImagePosition(location.pathname) }, [location]);
  return createPortal ( 
    <div id='image-square'>
      <Modal background="#ff66008f"/>
      <Images/>
    </div>,
    document.getElementById('image-square-container')! 
  );
}

export default ImageSquare;