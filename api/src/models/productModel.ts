import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface product {
  name:string;
  price:number;
  quantity:number;
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
      required:true,
    },
    quantity: {
      type:Number,
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
      description:product.description
    });
  }
}