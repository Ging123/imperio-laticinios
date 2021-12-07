import saveInTheCard from "./services/saveInTheCart";
import "./styles.scss";

interface props {
  description:string;
  name:string;
  price:number;
}

const AddToCartButton = (props:props) => {
  const classes = 'add-to-card-button darker-on-hover-or-click';
  const productData = {
    description:props.description,
    name:props.name,
    price:props.price
  }

  return (
    <button className={classes} onClick={() => saveInTheCard(productData)}>
      {`Adicionar no carrinho R$${props.price}`}
    </button>
  );
}

export default AddToCartButton;