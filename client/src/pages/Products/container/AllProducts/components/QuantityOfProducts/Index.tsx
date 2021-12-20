import './styles.scss';

const QuantityOfProducts = ({quantity}:{quantity:number}) => {

  return (
    <div className="quantity-of-products-found">
      {quantity} produtos
    </div>
  )
}

export default QuantityOfProducts;