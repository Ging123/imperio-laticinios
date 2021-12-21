import CreateProductsInTheCard from './services/createProductsInTheCard';
import animateMove from './services/animateMove';
import getCardData from './services/getCardData';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Index';
import { useEffect, useState } from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

interface props {
  hide:() => void;
}

const CardBar = (props:props) => {
  const [cardData, setCardData] = useState<any>([]);
  const history = useHistory();
  const goToLoginPage = () => history.push('/');
  const goToProductPage = () => history.push('/products');

  useEffect(() => {
    setTimeout(animateMove, 1);
    document.body.style.overflow = "hidden";

    (async () => {
      await getCardData()
      .then((cardData) => setCardData(cardData.data))
      .catch((err) => {
        const error = err.response;
        if(error.status === 401) return goToLoginPage();
        if(error.status === 403) return goToProductPage();
      })
    })();
    
    return () => {
      document.body.style.overflow = "visible";
    }
  }, []);

  const productsQuantity = cardData.products ? cardData.products.length : 0;

  return createPortal (
    <>
      <div className='card-bar'>
        <div className="card-text">Carrinho</div>
          <div className="items-quantity">
          <span>(</span>
          <span id="quantity">{productsQuantity}</span>
          {` itens registrados)`}
        </div>
        {
        cardData.products
        &&
        cardData.products.map((data:any) => {
          return (
          <CreateProductsInTheCard 
            key={data.name} 
            product={data}
          />
          
          );
        })
        }
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
