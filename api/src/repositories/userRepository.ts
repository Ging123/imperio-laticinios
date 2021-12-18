import UserModel from '../models/userModel';
import Encrypt from '../util/encrypt';

export default class UserRepository extends UserModel {

  private readonly encrypt = new Encrypt();

  public async insert(email:string, username:string, password:string) {
    const user = this.createNewUser(email, username, password);
    await this.encrypt.password(user);
    await user.save();
  }
}