import axios from "axios";
import config from "../../../../config";

async function createANewOrder() {
  const url = `${config.API_HOST}order/`;
  return await axios.post(url, {}, {withCredentials:true});
}

export default createANewOrder;