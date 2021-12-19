import validateIfInputIsEmpty from "../../../../../../../global/services/validateIfInputIsEmpty";
import validatePassword from "../../../../../../../global/services/validatePassword";
import validateEmail from "../../../../../../../global/services/validateEmail";
import config from "../../../../../../../config";
import axios from "axios";

export default class Request {

  private readonly url = `${config.API_HOST}user/`;

  public async registerEmail(email:string, username:string, password:string) {
    this.validate(email, username, password);
    const data = {
      email:email,
      username:username,
      password:password
    }
    await axios.post(this.url, data)
    .catch((err:any) => {
      const error = JSON.parse(err.request.response);
      throw error;
    });
  }

  private validate(email:string, username:string, password:string) {
    validateEmail(email);
    validateIfInputIsEmpty(username, 'nome de usuário');
    validatePassword(password, false);
  }
}