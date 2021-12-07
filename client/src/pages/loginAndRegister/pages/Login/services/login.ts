import validateIfInputIsEmpty from "../../../../../global/services/validateIfInputIsEmpty";
import validatePassword from "../../../../../global/services/validatePassword";
import config from "../../../../../config";
import axios from "axios";

interface userData {
  id:number;
  firstName:string;
  lastName:string;
  username:string;
  roles:any[];
  token:string;
}

export default class Request {

  private readonly url = `${config.API_HOST}api/users/login`;

  public async login(username:string, password:string) {
    this.validate(username, password);
    await axios.post(this.url, { username:username, password:password })
    .then((response:any) => this.saveUser(response.data.user))
    .catch((err:any) => {
      console.log(JSON.parse(err.request.response));
      const error = JSON.parse(err.request.response);
      throw error.full_messages[0];
    });
  }
 
  private validate(username:string, password:string) {
    validateIfInputIsEmpty(username, 'nome de usuário');
    validatePassword(password);
  }

  private saveUser(data:userData) {
    console.log(data);
    const dataInString = JSON.stringify(data);
    localStorage.setItem('user', dataInString);
  }
}