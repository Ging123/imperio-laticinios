import mongoose from "mongoose";
const Schema = mongoose.Schema;

export default class CartModel {

  private readonly cartSchema = new Schema({
    product: {
      type:String,
      required:true,
      maxLength:100
    },
    quantity: {
      type:Number,
      required:true,
    }
  });

  private readonly cartModel = mongoose.models.cart || mongoose.model('cart', this.cartSchema);

  protected createNewUser(product:string, quantity:number) {
    return new this.cartModel({
      product:product,
      quantity:quantity
    });
  }
}