import CartRepository from "../../repositories/cartRepository";

export interface product {
  name:string;
  quantity:number;
}

export default class Base {

  protected readonly cart = new CartRepository();

}