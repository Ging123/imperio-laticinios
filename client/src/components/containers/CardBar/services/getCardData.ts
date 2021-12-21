import config from "../../../../config";
import axios from "axios";

export default async function getCardData() {
  const url = `${config.API_HOST}cart`;
  return await axios.get(url, {withCredentials:true});
}