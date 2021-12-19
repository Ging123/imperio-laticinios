import ProductRepository from '../../repositories/productRepository';
import exception from '../../util/exceptions';

export type tag = "queijo"|"leite"|"iorgute"|"requeijão"|"manteiga";

export interface product {
  name:string;
  price:number;
  quantity:number;
  tag:tag;
  description?:string;
}

export default class Base {

  protected readonly product = new ProductRepository();

  protected validateProductName(name:string) {
    const productNameEmpty = 'Campo de nome do produto não foi preenchido';
    const productNameLengthGreaterThanMax = 'Nome do produto só pode ter no máximo 100 caracteries';
    if(!name) throw exception(productNameEmpty);
    if(name.length > 100) throw exception(productNameLengthGreaterThanMax);
  }

  protected validateProductPrice(price:number) {
    const priceEmpty = 'Campo de preço não foi preenchido';
    const priceGreaterThanMax = 'O preço máximo é de 10.000R$';
    if(!price) throw exception(priceEmpty);
    if(price > 10000) throw exception(priceGreaterThanMax);
  }

  protected validateProductQuantity(quantity:number) {
    const quantityEmpty = 'Campo de quantidade não foi preenchido';
    const quantityGreaterThanMax = 'Quantidade máxima de produtos é de 10000';
    if(!quantity) throw exception(quantityEmpty);
    if(quantity > 10000) throw exception(quantityGreaterThanMax);
  }

  protected validateTag(tag:tag) {
    const tagEmpty = 'Campo de tag não foi preenchido';
    const invalidTag = 'Tag inválida';
    const tags = ["queijo","leite","iorgute","requeijão","manteiga"];
    if(!tag) throw exception(tagEmpty);
    for(const validTag of tags) {
      if(tag === validTag) return;
    }
    throw exception(invalidTag);
  }

  protected validateProductDescription(description?:string) {
    const descriptionLengthGreaterThanMax = 'Descrição só pode ter no máximo 100 caracteries';
    if(!description) return;
    if(description.length > 100) throw exception(descriptionLengthGreaterThanMax);
  }
}