import exception from "../../util/exceptions";
import Base, { product } from "./base";

export default class UpdateQuantityOfAProductUseCase extends Base {

  public async updateQuantity(product:product, ownerUsername:string) {
    const cart:any = await this.getCart(ownerUsername);
    await this.searchAndUpdateProduct(cart, product);
  }

  private async getCart(ownerUsername:string) {
    const userDoesntHasACart = 'Usuario não possui um carrinho';
    const cart:any = await this.cart.findByOwner(ownerUsername);
    if(!cart) throw exception(userDoesntHasACart);
    return cart;
  }

  private async searchAndUpdateProduct(cart:any, product:product) {
    const cartDoesntHaveThisProduct = 'Carrinho não possui esse produto';
    for(let i = 0; i < cart.products.length; i++) {
      if(cart.products[i].name === product.name) {
        return await this.updateCart(cart, i, product.quantity);
      }
    }
    throw exception(cartDoesntHaveThisProduct)
  }

  private async updateCart(cart:any, index:number, quantity:number) {
    if(quantity === 0) cart.products.splice(index, 1);
    else cart.products[index].quantity = quantity;
    await this.cart.update(cart);
  }
}