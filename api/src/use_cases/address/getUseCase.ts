import exception from "../../util/exceptions";
import Base from "./base";

export default class GetUseCase extends Base {
  
  public async get(usernameOfTherOwner:string) {
    const userDoesntHaveAnAddress = 'Você não tem um endereço registrado ainda';
    const userAddress = await this.address.findOneByUsernameOfTheOwner(usernameOfTherOwner);
    if(!userAddress) throw exception(userDoesntHaveAnAddress);
    return userAddress;
  }
}