import config from "../../config";
import axios from "axios";

export default async function logout(goToHomePage:() => void) {
  const url = `${config.API_HOST}user/logout`;
  await axios.delete(url, {withCredentials:true})
  .then(() => goToHomePage());
}