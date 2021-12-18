import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default class AddressModel {

  private readonly addressSchema = new Schema({
    address: {
      type:String,
      required:true,
      maxLength:100
    }
  });

  private readonly addressModel = mongoose.models.address || mongoose.model('address', this.addressSchema);

  protected createNewUser(address:string) {
    return new this.addressModel({
      address:address
    });
  }
}