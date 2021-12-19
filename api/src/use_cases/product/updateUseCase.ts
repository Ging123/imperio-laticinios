import exception from "../../util/exceptions";
import Base, { product } from "./base";

export default class UpdateUseCase extends Base {

  public async update(product:product, oldName:string) {
    if(product.name !== oldName) await this.verifyIfProductAlredyExists(product.name);
    this.validateProductName(product.name);
    this.validateProductPrice(product.price);
    this.validateProductQuantity(product.quantity);
    this.validateTag(product.tag);
    this.validateProductDescription(product.description);
    await this.product.update(product, oldName);
  }

  private async verifyIfProductAlredyExists(name:string) {
    const productAlredyExists = 'Esse produto já existe';
    const product = await this.product.findOneByName(name);
    if(product) throw exception(productAlredyExists);
  }
} 