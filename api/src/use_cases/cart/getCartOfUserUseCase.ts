import exception from '../../util/exceptions';
import Base from "./base";

export default class GetCartOfUserUseCase extends Base {

  public async get(ownerOfTheCart:string) {
    const userDoesntHaveACart = 'Usuário não tem um carrinho';
    const cart = await this.cart.findByOwner(ownerOfTheCart);
    if(!cart) throw exception(userDoesntHaveACart);
    return cart;
  }
}