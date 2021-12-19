import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface product {
  name:string;
  quantity:number;
}

export default class CartModel {

  private readonly cartSchema = new Schema({
    usernameOfOwner: {
      type:String,
      required:true,
      index:true,
      maxLength:100,
      unique:true
    },
    products: {
      type:Array,
      required:true,
      maxLength:100
    }
  });

  private readonly cartModel = mongoose.models.cart || mongoose.model('cart', this.cartSchema);

  protected createNewCart(usernameOfOwner:string, products:product) {
    return new this.cartModel({
      usernameOfOwner:usernameOfOwner,
      products:[products]
    });
  }

  public findByOwner(username:string) {
    return new Promise(async (sucess) => {
      await this.cartModel.findOne({ usernameOfOwner:username })
      .then((user) => sucess(user));
    });
  }

  public find() {
    return new Promise(async (sucess) => {
      await this.cartModel.find({})
      .then((user) => sucess(user));
    });
  }
}