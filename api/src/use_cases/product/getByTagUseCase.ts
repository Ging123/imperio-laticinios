import Base, {tag} from "./base";

export default class GetByTagUseCase extends Base {
  
  public async getByTag(tag:tag) {
    return await this.getByTag(tag);
  }
}