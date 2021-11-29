import * as EmailValidator from 'email-validator';

export default function validateEmail(email:string) {
  if(!email) throw 'Campo de email não foi preenchido';
  const emailIsValid = EmailValidator.validate(email);
  if(!emailIsValid) throw 'Email inválido';
}