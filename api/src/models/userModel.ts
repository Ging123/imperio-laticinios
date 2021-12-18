import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default class UserModel {

  private readonly userSchema = new Schema({
    email: {
      type:String,
      required:true,
      maxLength:100,
      index:true,
      unique: true
    },
    username: {
      type:String,
      required:true,
      maxLength:30,
      index:true,
      unique:true
    },
    password: {
      type:String,
      required:true,
      maxlength:100
    }
  });

  private readonly userModel = mongoose.models.user || mongoose.model('user', this.userSchema);

  protected createNewUser(email:string, username:string, password:string) {
    return new this.userModel({
      email:email,
      username:username,
      password:password,
    });
  }

  public findOneByEmail(email:string) {
    return new Promise(async (sucess) => {
      await this.userModel.findOne({ email:email })
      .then((user) => sucess(user));
    });
  }

  public findOneByUsername(username:string) {
    return new Promise(async (sucess) => {
      await this.userModel.findOne({ username:username })
      .then((user) => sucess(user));
    });
  }
}