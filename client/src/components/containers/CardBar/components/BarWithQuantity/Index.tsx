import updateProductQuantity from './services/updateProductQuantity';
import { Dispatch, SetStateAction, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

interface props {
  quantity:number;
  setQuantity:Dispatch<SetStateAction<any>>;
  name:string;
}

const BarWithQuantity = (props:props) => {
  const history = useHistory();
  const goToLoginPage = () => history.push('/');
  const goToProductPage = () => history.push('/products');

  async function remove() {
    await updateProductQuantity(props.name, props.quantity-1)
    .then(() => props.setQuantity(props.quantity-1))
    .catch((err) => {
      const error = err.response;
      if(error.status === 401) return goToLoginPage();
      if(error.status === 403) return goToProductPage();
    });
  }

  async function add() {
    await updateProductQuantity(props.name, props.quantity+1)
    .then(() => props.setQuantity(props.quantity+1))
    .catch((err) => {
      const error = err.response;
      if(error.status === 401) return goToLoginPage();
      if(error.status === 403) return goToProductPage();
    });
  }

  return (
    <>
    {props.quantity &&
    <div className='container-of-product-quantity'>
      <i 
        className="fas fa-minus darker-on-hover-or-click"
        onClick={() => remove()}
      />
      <div>{props.quantity}</div>
      <i 
        className="fas fa-plus darker-on-hover-or-click"
        onClick={() => add()}
      />
    </div>
    }
    </>
  )
}

export default BarWithQuantity;