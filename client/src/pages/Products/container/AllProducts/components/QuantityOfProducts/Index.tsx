import getQuantity from './services/getQuantity';
import './styles.scss';

const QuantityOfProducts = () => {
  const quantity = getQuantity();

  return (
    <div className="quantity-of-products-found">
      {quantity} produtos
    </div>
  )
}

export default QuantityOfProducts;