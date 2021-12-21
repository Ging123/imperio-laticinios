import CartRepository from "../../repositories/cartRepository";
import ProductRepository from '../../repositories/productRepository';

export interface product {
  name:string;
  quantity:number;
  price?:number;
}

export default class Base {

  protected readonly cart = new CartRepository();
  protected readonly product = new ProductRepository();

}