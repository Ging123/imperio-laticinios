import config from "../../../../../../../config";
import axios from "axios";

export default async function getAllProducts() {
  const url = `${config.API_HOST}product/all`;
  return await axios.get(url, {withCredentials: true}); 
} 