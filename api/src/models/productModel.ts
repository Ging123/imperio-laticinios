import mongoose from "mongoose";
const Schema = mongoose.Schema;

type tag = "queijo"|"leite"|"iorgute"|"requeijão"|"manteiga";

interface product {
  name:string;
  price:number;
  quantity:number;
  tag:tag;
  description?:string;
}

export default class ProductModel {

  private readonly productSchema = new Schema({
    name: {
      type:String,
      required:true,
      maxLength:100,
      index:true,
      unique: true
    },
    price: {
      type:Number,
      max:10000,
      required:true,
    },
    quantity: {
      type:Number,
      max:10000,
      required:true
    },
    tag: {
      type:String,
      required:true
    },
    description: {
      type:String
    }
  });

  private readonly productModel = mongoose.models.product || mongoose.model('product', this.productSchema);

  protected createNewProduct(product:product) {
    return new this.productModel({
      name:product.name,
      price:product.price,
      quantity:product.quantity,
      tag:product.tag,
      description:product.description
    });
  }

  public findOneByName(name:string) {
    return new Promise(async (sucess) => {
      await this.productModel.findOne({ name:name })
      .then((user) => sucess(user));
    });
  }

  public find() {
    return new Promise(async (sucess) => {
      await this.productModel.find({})
      .then((user) => sucess(user));
    });
  }

  public findByTag(tagName:tag) {
    return new Promise(async (sucess) => {
      await this.productModel.find({tag:tagName})
      .then((user) => sucess(user));
    });
  }

  protected updateProduct(product:product) {
    return new Promise(async (sucess) => {
      const query = {name:product.name};
      await this.productModel.updateOne(query, {$set:product})
      .then((productUpdated) => sucess(productUpdated))
    });
  }

  protected async deleteOneByName(productName:string) {
    await this.productModel.deleteOne({name:productName});
  }
}