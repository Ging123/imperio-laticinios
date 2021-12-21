import BarWithQuantity from "../components/BarWithQuantity/Index"
import removeProduct from "./removeProduct";
import { useState } from "react";
import { useHistory } from "react-router-dom";

interface props {
  product:any;
}

export default function CreateProductsInTheCard(props:props) {
  const [quantity, setQuantity] = useState(props.product.quantity); 
  const history = useHistory();
  const goToLoginPage = () => history.push('/');
  const goToProductPage = () => history.push('/products');

  async function remove() {
    await removeProduct(props.product.name)
    .then(() => setQuantity(0))
    .catch((err) => {
      const error = err.response;
      if(error.status === 401) return goToLoginPage();
      if(error.status === 403) return goToProductPage();
    });
  }
  
  return (
    <>
    {quantity !== 0 &&
      <div className="container-of-product-in-the-cart" key={props.product.name}>
        <div className="product-in-the-cart-name">{props.product.name}</div>
        <div className='card-bar-body'>
          <BarWithQuantity 
            quantity={quantity}
            setQuantity={setQuantity}
            name={props.product.name} 
          />
          <div className='remove-option orange_on_hover' onClick={remove}>
            remover
          </div>
          <div className="flex-row">
            <div className="product-price">{props.product.price}</div>
            <span style={{fontSize:'14px'}}>R$</span>
          </div>
        </div>
      </div>
    }
    </>
  )
}