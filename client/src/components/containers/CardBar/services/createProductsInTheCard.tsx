import BarWithQuantity from "../components/BarWithQuantity/Index"
import { useState } from "react";

interface props {
  product:any;
}

export default function CreateProductsInTheCard(props:props) {
  const [quantity, setQuantity] = useState(props.product.quantity); 
  
  return (
    <>
    {quantity !== 0 &&
      <div className="container-of-product-in-the-cart" key={props.product.name}>
        <div className="product-in-the-cart-name">{props.product.name}</div>
        <BarWithQuantity 
          quantity={quantity}
          setQuantity={setQuantity}
          name={props.product.name} 
        />
      </div>
    }
    </>
  )
}