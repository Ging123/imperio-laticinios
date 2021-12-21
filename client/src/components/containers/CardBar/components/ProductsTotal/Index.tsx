import { useEffect } from 'react';
import calculateTotal from '../../services/calculateTotal';
import './styles.scss';

const ProductsTotal = () => {
  //product-price
  //product-quantity

  useEffect(() => {
    calculateTotal()
  }, []);

  return (
    <div id="total-container">
      <div className='total-text'>Total:</div>
      <div id="total-value"/>
    </div>
  )
}

export default ProductsTotal;