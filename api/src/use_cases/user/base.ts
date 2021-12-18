import UserRepository from "../../repositories/userRepository";

export default class Base {

  protected user = new UserRepository();
  
}