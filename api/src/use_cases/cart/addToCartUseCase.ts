import exception from '../../util/exceptions';
import Base, { product } from "./base";

export default class AddToCartUseCase extends Base {
  
  public async add(ownerUsername:string, product:product) {
    const userHasAnCart = await this.cart.findByOwner(ownerUsername);
    if(userHasAnCart) return await this.addANewProductToTheCard(ownerUsername, product);
    await this.cart.create(ownerUsername, product);
  }

  private async addANewProductToTheCard(ownerUsername:string, product:product) {
    const cart = await this.cart.findByOwner(ownerUsername);
    this.validateIfProductAlreadIsInTheCart(cart, product);
    this.cart.add(cart, product);
  }

  private validateIfProductAlreadIsInTheCart(cart:any, product:product) {
    const productAlredyAdded = 'Esse produto já foi adicionado';
    for(let i = 0; i < cart.products.length; i++ ) {
      if(product.name === cart.products[i].name) {
        throw exception(productAlredyAdded);
      }
    }
  }
}