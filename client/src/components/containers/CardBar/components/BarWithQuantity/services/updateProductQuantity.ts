import config from "../../../../../../config";
import axios from "axios";

async function updateProductQuantity(name:string, quantity:number) {
  const url = `${config.API_HOST}cart`;
  const data = {
    name:name,
    quantity:quantity
  }
  return await axios.put(url, data, {withCredentials:true})//items-quantity
  .then(() => {
    if(quantity === 0) { 
      const quantityElement = document.getElementById('quantity')!;
      const quantity = parseInt(quantityElement.textContent!) - 1;
      quantityElement.textContent! = `${quantity}`; 
    }
  });
}

export default updateProductQuantity;