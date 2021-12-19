import AddressModel from "../models/addressModel";

export default class AddressRepository extends AddressModel {

  public async insert(usernameOfTheOwner:string, address:string) {
    const userAddress = this.createNewAddress(usernameOfTheOwner, address);
    await userAddress.save();
  }
}