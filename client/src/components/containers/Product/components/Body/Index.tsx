import AddToCartButton from '../../../../buttons/AddToCartButton/Index';
import './styles.scss';

interface props {
  description:string;
  name:string;
  price:number;
}

const Body = (props:props) => {
  return (
    <div className="product-body-container">
      <div className="name">{props.name}</div>
      <div className="description">{props.description}</div>
      <AddToCartButton 
        description={props.description}
        name={props.name}
        price={props.price}
      />
    </div>
  )
}

export default Body
