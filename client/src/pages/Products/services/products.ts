import config from "../../../config";
import axios from "axios";

export default class Product {

  private readonly url = `${config.API_HOST}api/products`;

  public async get() {
    await axios.get(this.url, {withCredentials:true})
    .then((response:any) => {
      console.log(response.data);
    })
    .catch((err:any) => {
      console.log(JSON.parse(err.request.response));
      const error = JSON.parse(err.request.response);
      throw error.full_messages[0];
    });
  }
}