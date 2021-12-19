import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default class AddressModel {

  private readonly addressSchema = new Schema({
    usernameOfTheOwner: {
      type:String,
      index:true,
      unique:true,
      require:true
    },
    address: {
      type:String,
      required:true,
      index:true,
      maxLength:100
    }
  });

  private readonly addressModel = mongoose.models.address || mongoose.model('address', this.addressSchema);

  protected createNewAddress(usernameOfTheOwner:string, address:string) {
    return new this.addressModel({
      usernameOfTheOwner:usernameOfTheOwner,
      address:address
    });
  }

  public findOneByUsernameOfTheOwner(usernameOfTheOwner:string) {
    return new Promise(async (sucess) => {
      await this.addressModel.findOne({ usernameOfTheOwner:usernameOfTheOwner })
      .then((address) => sucess(address));
    });
  } 
}