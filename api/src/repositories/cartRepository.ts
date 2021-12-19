import CartModel from '../models/cartModel';

interface product {
  name:string;
  quantity:number;
}

export default class CartRepository extends CartModel {

  public async create(ownerUsername:string, product:product) {
    const cart = this.createNewCart(ownerUsername, product);
    await cart.save();
  }

  public async add(cart:any, product:product) {
    cart.products.push(product);
    await cart.save();
  }
}