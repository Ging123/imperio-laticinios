import exception from '../../util/exceptions';
import bcrypt from 'bcrypt';
import Base from "./base";

export default class LoginUseCase extends Base {

  public async login(emailOrUsername:string, password:string) {
    const user:any = await this.user.findOneByEmailOrUsername(emailOrUsername);
    this.validateIfUserExists(user);
    await this.verifyIfPasswordsMatch(password, user.password);
    return user;
  }

  private validateIfUserExists(user:any) {
    const emailOrUsernameDoesntExists = 'Esse email ou nome de usuário não existe';
    if(!user) throw exception(emailOrUsernameDoesntExists);
  }

  private async verifyIfPasswordsMatch(password:string, encryptPassword:string) {
    const wrongPassword = 'Senha digitada errada';
    password += process.env.SALT_SECRET!;
    const match = await bcrypt.compare(password, encryptPassword);
    if(!match) throw exception(wrongPassword);
  }
}