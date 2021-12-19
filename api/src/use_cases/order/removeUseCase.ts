import exception from "../../util/exceptions";
import Base from "./base";

export default class RemoveUseCase extends Base {
  
  public async remove(id:string) {
    const emptyId = 'Campo de id do produto não foi enviado';
    if(!id) throw exception(emptyId);
    await this.order.delete(id);
  }
}