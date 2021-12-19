import UserRepository from "../../repositories/userRepository";

export default class Base {

  protected readonly user = new UserRepository();
  
}