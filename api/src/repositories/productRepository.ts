import ProductModel from '../models/productModel';

interface product {
  name:string;
  price:number;
  quantity:number;
  tag:"queijo"|"leite"|"iorgute"|"requeijão"|"manteiga";
  description?:string;
}

export default class ProductRepository extends ProductModel {

  public async insert(product:product) {
    const productData = this.createNewProduct(product);
    await productData.save();
  }

  public async update(product:product) {
    return await this.updateProduct(product);
  }

  public async delete(productName:string) {
    await this.deleteOneByName(productName);
  }
}