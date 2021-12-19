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
    },
    role: {
      type:String,
      required:true
    }
  });

  private readonly userModel = mongoose.models.user || mongoose.model('user', this.userSchema);

  protected createNewUser(email:string, username:string, password:string) {
    return new this.userModel({
      email:email,
      username:username,
      password:password,
      role:"user"
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

  public findOneByEmailOrUsername(emailOrUsername:string) {
    return new Promise(async (sucess) => {
      await this.userModel.findOne({ 
        $or: [ {email:emailOrUsername}, {username:emailOrUsername} ]
      })
      .then((user) => sucess(user));
    });
  }
}