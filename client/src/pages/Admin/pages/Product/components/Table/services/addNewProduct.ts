import config from "../../../../../../../config";
import axios from "axios";

export default async function addNewProduct(newRow:any) {
  const url = `${config.API_HOST}product/`;
  const data = {
    name:newRow.name,
    quantity:newRow.quantity,
    description:newRow.description,
    tag:newRow.tag,
    price:newRow.price
  }
  return await axios.post(url, data, { withCredentials: true });
}