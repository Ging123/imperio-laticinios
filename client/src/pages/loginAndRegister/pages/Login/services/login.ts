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

  private readonly url = `${config.API_HOST}user/login`;

  public async login(emailOrUsername:string, password:string) {
    this.validate(emailOrUsername, password);
    const data = { emailOrUsername:emailOrUsername, password:password };
    const user:any = await axios.post(this.url, data, { withCredentials: true })
    .catch((err) => {
      console.log(err)
      const error = JSON.parse(err.request.response);
      throw error;
    });
    return user;
  }
 
  private validate(username:string, password:string) {
    validateIfInputIsEmpty(username, 'nome de usuário');
    validatePassword(password);
  }

  private saveUser(data:userData) {
    const dataInString = JSON.stringify(data);
    localStorage.removeItem('user');
    localStorage.setItem('user', dataInString);
  }
}