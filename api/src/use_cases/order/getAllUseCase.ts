import exception from "../../util/exceptions";
import Base from "./base";

export default class GetAllUseCase extends Base {

  public async getAll() {
    const thereIsNotOrders = 'Não há pedidos no momento';
    const orders = await this.order.find();
    if(!orders) throw exception(thereIsNotOrders);
    return orders;
  }
}