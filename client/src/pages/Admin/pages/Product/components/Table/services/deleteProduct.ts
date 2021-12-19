import config from "../../../../../../../config";
import axios from "axios";

export default async function deleteProduct(productName:string) {
  const url = `${config.API_HOST}product/`;
  const data = {name:productName}
  return await axios.delete(url, {withCredentials: true, data:data});
}