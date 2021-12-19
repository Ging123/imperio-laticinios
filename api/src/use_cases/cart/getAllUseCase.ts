import Base from './base';

export default class GetAllUseCase extends Base {

  public async getAll() {
    return await this.cart.find();
  }
}