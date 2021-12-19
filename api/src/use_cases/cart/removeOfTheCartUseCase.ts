import exception from "../../util/exceptions";
import Base from "./base";

export default class RemoveOfTheCartUseCase extends Base {
  
  public async remove(ownerUsername:string, productNameToRemove:string) {
    const cart = await this.getUserCart(ownerUsername);
    await this.removeProduct(cart, productNameToRemove);
  }

  private async getUserCart(ownerUsername:string) {
    const userDoesntHaveACart = 'Usuário não tem nada no carrinho para remover';
    const cart = await this.cart.findByOwner(ownerUsername);
    if(!cart) throw exception(userDoesntHaveACart);
    return cart;
  }

  private async removeProduct(cart:any, productNameToRemove:string) {
    for(let i = 0; i < cart.products.length; i++) {
      if(cart.products[i].name === productNameToRemove) {
        cart.products.splice(i, 1);
        return await cart.save();
      } 
    }
    throw exception('Usuário não possui esse item no cart para remover');
  }
}