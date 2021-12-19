import exception from "../../util/exceptions";
import Base, { product } from "./base";

export default class SaveUseCase extends Base {
  
  public async save(product:product) {
    this.validateProductName(product.name);
    this.validateProductPrice(product.price);
    this.validateProductQuantity(product.quantity);
    this.validateProductDescription(product.description);
    this.validateTag(product.tag);
    await this.verifyIfProductAlreadyExists(product.name);
    await this.product.insert(product);
  }

  protected async verifyIfProductAlreadyExists(productName:string) {
    const productAlreadyRegister = 'Esse produto já está registrado no sistema';
    const product = await this.product.findOneByName(productName);
    if(product) throw exception(productAlreadyRegister);
  }
} 