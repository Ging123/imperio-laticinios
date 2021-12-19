import OrderRepository from "../../repositories/orderRepository";
import GetUseCase from '../product/getUseCase';

interface order {
  product:string;
  price:number;
  quantity:number;
  client:string;
  address:string;
}

export default class Base {

  protected readonly order = new OrderRepository();
  protected readonly product = new GetUseCase();

}