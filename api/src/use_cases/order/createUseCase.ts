import GetCartOfUserUseCase from '../cart/getCartOfUserUseCase';
import GetUseCase from '../address/getUseCase';
import Base from "./base";

export default class CreateUseCase extends Base {

  private readonly cart = new GetCartOfUserUseCase();
  private readonly address = new GetUseCase();

  public async create(username:string) {
    const cart = await this.cart.get(username);
    const address = await this.address.get(username);
    await this.createOrderForTheUser(cart, address);
  }

  private async createOrderForTheUser(cart:any, address:any) {
    for(let i = 0; i < cart.products.length; i++) {
      const product:any = await this.product.get(cart.products[i].name);
      await this.order.create({
        product:product.name,
        price:product.price,
        quantity:cart.products[i].quantity,
        client:address.usernameOfTheOwner,
        address:address.address
      });
    }
    await this.clearCartOfUser(cart);
  }

  private async clearCartOfUser(cart:any) {
    cart.products = [];
    await cart.save();
  }
}