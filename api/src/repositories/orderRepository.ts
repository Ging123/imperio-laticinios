import OrderModel from "../models/orderModel"

interface order {
  product:string;
  price:number;
  quantity:number;
  client:string;
  address:string;
}

export default class OrderRepository extends OrderModel {

  public async create(order:order) {
    const orderCreated = this.createNewOrder(order);
    await orderCreated.save();
  }
}