import Icone from '../../../../buttons/Icone/Index';
import CardBar from '../../../CardBar/Index';
import { useState } from 'react';

const Cart = () => {
  const [cardVisible, setCardVisible] = useState(false);
  const classes = 'fas fa-shopping-cart orange_on_hover'
  return (
    <>
     <Icone className={classes} onClick={() => setCardVisible(true)}/> 
     {cardVisible && <CardBar hide={() => setCardVisible(false)}/>}
    </>
  )
}

export default Cart;