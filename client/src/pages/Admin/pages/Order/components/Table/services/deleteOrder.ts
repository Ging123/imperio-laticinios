import config from "../../../../../../../config";
import axios from "axios";

export default async function deleteOrder(id:string) {
  const url = `${config.API_HOST}order/`;
  return await axios.delete(url, {withCredentials: true, data:{id:id}});
}