import exception from '../../util/exceptions';
import Base from './base';

export default class GetAllUseCase extends Base {

  public async getAll() {
    const thereIsNotCartsToGet = 'Não há carrinhos para pegar';
    const carts = await this.cart.find();
    if(!carts) throw exception(thereIsNotCartsToGet);
    return carts;
  }
}