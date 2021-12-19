import config from "../../../../../../../config";
import axios from "axios";

export default async function updateProduct(newRow:any, oldName:string) {
  const url = `${config.API_HOST}product/`;
  const data = {
    name:newRow.name,
    quantity:newRow.quantity,
    description:newRow.description,
    tag:newRow.tag,
    price:newRow.price,
    oldName:oldName
  }
  return await axios.put(url, data, {withCredentials: true});
}