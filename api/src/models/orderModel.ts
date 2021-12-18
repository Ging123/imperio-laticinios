import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface order {
  product:string;
  price:number;
  quantity:number;
  client:string;
  address:string;
}

export default class OrderModel {

  private readonly orderSchema = new Schema({
    product: {
      type:String,
      required:true,
      maxLength:100,
    },
    price: {
      type:Number,
      required:true,
    },
    quantity: {
      type:Number,
      required:true
    },
    client: {
      type:String,
      required:true
    },
    address: {
      type:String,
      required:true
    }
  });

  private readonly orderModel = mongoose.models.order || mongoose.model('order', this.orderSchema);

  protected createNewOrder(order:order) {
    return new this.orderModel({
      product:order.product,
      price:order.price.toFixed,
      quantity:order.quantity,
      client:order.client,
      address:order.address
    });
  }
}