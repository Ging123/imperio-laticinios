import Image from './components/Image/Index';
import Body from './components/Body/Index';
import './styles.scss';

interface props {
  description:string;
  name:string;
  price:number;
  src:string;
} 

const Product = (props:props) => {
  return (
    <div className="product-container">
      <Image src={props.src}/>
      <Body
        description={props.description}
        name={props.name}
        price={props.price}
      />
    </div>
  )
}

export default Product;