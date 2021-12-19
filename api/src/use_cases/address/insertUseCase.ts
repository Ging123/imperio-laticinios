import exception from '../../util/exceptions';
import Base from './base';

export default class InsertUseCase extends Base {

  public async insert(usernameOfTherOwner:string, address:string) {
    this.validateAddress(address);
    await this.verifyIfUserAlredyHasAnAddress(usernameOfTherOwner);
    await this.address.insert(usernameOfTherOwner, address);
  }

  private validateAddress(address:string) {
    const emptyAddress = 'Endereço não foi preenchido';
    const addressLengthGreaterThanMax = 'Endereço deve ter no máximo 100 caracteries';
    if(!address) throw exception(emptyAddress);
    if(address.length > 100) throw exception(addressLengthGreaterThanMax);
  }

  private async verifyIfUserAlredyHasAnAddress(usernameOfTherOwner:string) {
    const userAlredyHasAnAddres = 'Você já possui um endereço registrado';
    const userHasAnAddres = await this.address.findOneByUsernameOfTheOwner(usernameOfTherOwner);
    if(userHasAnAddres) throw exception(userAlredyHasAnAddres);
  }
}