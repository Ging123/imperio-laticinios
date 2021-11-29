import validateIfInputIsEmpty from "../../../../../../../global/services/validateIfInputIsEmpty";
import validatePassword from "../../../../../../../global/services/validatePassword";
import validateEmail from "../../../../../../../global/services/validateEmail";
import config from "../../../../../../../config";
import axios from "axios";

export default class Request {

  private readonly url = `${config.API_HOST}api/users/`;

  public async registerEmail(firstName:string, lastName:string, email:string, 
  username:string, password:string) {
    this.validate(email, username, password, firstName, lastName);
    const data = {
      first_name:firstName,
      last_name:lastName,
      email:email,
      username:username,
      password:password
    }
    await axios.post(this.url, data)
    .catch((err:any) => {
      console.log(JSON.parse(err.request.response));
      const error = JSON.parse(err.request.response);
      throw error.full_messages[0];
    });
  }

  private validate(email:string, username:string, password:string, firstName:string,
  lastName:string) {
    validateIfInputIsEmpty(firstName, 'nome');
    validateIfInputIsEmpty(lastName, 'sobrenome');
    validateEmail(email);
    validateIfInputIsEmpty(username, 'nome de usuário');
    validatePassword(password, false);
  }
}