import config from "../../../../../../../config";
import axios from "axios";

export default async function getAllOrders() {
  const url = `${config.API_HOST}order/`;
  return await axios.get(url, {withCredentials: true});
}