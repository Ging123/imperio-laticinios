import config from "../../../../config";
import axios from "axios";

async function removeProduct(productName:string) {
  const url = `${config.API_HOST}cart`;
  await axios.delete(url, {withCredentials:true, data:{name:productName}})
  .then(() => {
    const quantityElement = document.getElementById('quantity')!;
    const quantity = parseInt(quantityElement.textContent!) - 1;
    quantityElement.textContent! = `${quantity}`; 
  })
}

export default removeProduct;