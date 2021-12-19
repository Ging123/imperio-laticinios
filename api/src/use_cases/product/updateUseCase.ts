import Base, { product } from "./base";

export default class UpdateUseCase extends Base {

  public async update(product:product) {
    this.validateProductName(product.name);
    this.validateProductPrice(product.price);
    this.validateProductQuantity(product.quantity);
    this.validateTag(product.tag);
    this.validateProductDescription(product.description);
    await this.product.update(product);
  }
} 