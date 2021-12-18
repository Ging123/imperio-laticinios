import bcrypt from 'bcrypt';

export default class Encrypt {

  public async password(user:any) {
    await bcrypt.hash(user.password + process.env.SALT_SECRET!, 10)
    .then((encryptPassword:string) => user.password = encryptPassword);
  }
}