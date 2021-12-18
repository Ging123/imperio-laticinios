import * as EmailValidator from 'email-validator';
import exception from '../../util/exceptions';
import Base from './base';

export default class SaveUserUseCase extends Base {

  public async save(email:string, username:string, password:string) {
    this.validateEmail(email);
    this.validateUsername(username);
    this.validatePassword(password);
    await this.verifyIfEmailAlredyExists(email);
    await this.verifyIfUsernameAlredyExists(username);
    await this.user.insert(email, username, password);
  }

  private validateEmail(email:string) {
    const emailIsNotValid = EmailValidator.validate(email) === false;
    const emptyEmail = 'Campo de email não foi preenchido';
    const invalidEmail = 'Email inválido';
    const emailLengthGreaterThanMax = 'Email deve ter no máximo 100 caracteries';
    if(!email) throw exception(emptyEmail); 
    if(emailIsNotValid) throw exception(invalidEmail);
    if(email.length > 100) throw exception(emailLengthGreaterThanMax);
  }

  private validateUsername(username:string) {
    const emptyUsername = 'Campo de nome do usuario não foi preenchido';
    const usernameLengthGreaterThanMax = 'Nome de usuario deve ter no máximo 50 caracteries';
    if(!username) throw exception(emptyUsername);
    if(username.length > 50) throw exception(usernameLengthGreaterThanMax);
  }

  private validatePassword(password:string) {
    const passwordEmpty = 'Campo de senha não foi preenchido';
    const passwordLengthGreaterThanMax = 'Senha deve ter no máximo 30 caracteries';
    const passwordShorterThanMin = 'Senha deve ter no mínimo 7 caracteries';
    if(!password) throw exception(passwordEmpty);
    if(password.length > 30) throw exception(passwordLengthGreaterThanMax);
    if(password.length < 7) throw exception(passwordShorterThanMin);
  }

  private async verifyIfEmailAlredyExists(email:string) {
    const emailExists = await this.user.findOneByEmail(email);
    const emailAlredyExists = 'Esse email já está sendo utilizado';
    if(emailExists) throw exception(emailAlredyExists);
  }

  private async verifyIfUsernameAlredyExists(username:string) {
    const usernameExists = await this.user.findOneByUsername(username);
    const usernameAlredyExists = 'Esse nome de usuário já está sendo utilizado';
    if(usernameExists) throw exception(usernameAlredyExists);
  }
}