import { useState } from "react";
import { useHistory } from "react-router-dom";
import saveInTheCard from "./services/saveInTheCart";
import "./styles.scss";

interface props {
  description:string;
  name:string;
  price:number;
}

const AddToCartButton = (props:props) => {
  const history = useHistory();
  const normalClasses = 'add-to-card-button darker-on-hover-or-click';
  const loading = 'add-to-card-button-loading';
  const [classes, setClasses] = useState(normalClasses);
  const content = classes === loading ? 
  'Carregando...' : `Adicionar no carrinho R$${props.price}`

  return (
    <button className={classes} 
    onClick={() => saveInTheCard(props.name, history, setClasses)}
    disabled={classes === loading}>
      {content}
    </button>
  );
}

export default AddToCartButton;