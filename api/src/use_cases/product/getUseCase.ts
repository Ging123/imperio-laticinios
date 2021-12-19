import exception from "../../util/exceptions";
import Base from "./base";

export default class GetUseCase extends Base {

  public async get(productName:string) {
    const productDoesntExists = 'Esse produto não existe';
    const product = await this.product.findOneByName(productName);
    if(!product) throw exception(productDoesntExists);
    return product;
  }
}