import Base from "./base";

export default class DeleteUseCase extends Base {

  public async delete(productName:string) {
    await this.product.delete(productName);
  }
}