import animateMove from './services/animateMove';
import getCardData from './services/getCardData';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Index';
import { useEffect } from 'react';
import './styles.scss';
import createProductsInTheCard from './services/createProductsInTheCard';

interface props {
  hide:() => void;
}

const CardBar = (props:props) => {
  const cardData = getCardData();
  useEffect(() => {
    setTimeout(animateMove, 1);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    }
  }, []);


  return createPortal (
    <>
      <div className='card-bar'>
        <div className="card-text">Carrinho</div>
        <div className="items-quantity">{`(${cardData.length} items registrados)`}</div>
        {/*cardData.map((data:any) => createProductsInTheCard(data))*/}
      </div>
      <Modal 
        background="#000000b4" 
        onClick={props.hide}
      />
    </>,
    document.getElementById("card-bar")!
  );
}

export default CardBar
