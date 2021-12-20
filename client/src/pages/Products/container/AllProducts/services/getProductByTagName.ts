import config from "../../../../../config";
import axios from "axios";

export default async function getProductByTagName(tag:string) {
  const url = `${config.API_HOST}product/byTag`;
  return await axios.post(url, {tag:tag}, {withCredentials:true});
}