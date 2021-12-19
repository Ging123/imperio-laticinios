import Base from "./base";

export default class GetCartOfUserUseCase extends Base {

  public async get(ownerOfTheCart:string) {
    return await this.cart.findByOwner(ownerOfTheCart);
  }
}