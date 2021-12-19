import Base, {tag} from "./base";

export default class GetByTagUseCase extends Base {
  
  public async getByTag(tagName:tag) {
    return await this.product.findOneByName(tagName);
  }
}