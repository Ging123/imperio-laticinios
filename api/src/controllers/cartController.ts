import UpdateQuantityOfAProductUseCase from '../use_cases/cart/updateQuantityOfAProductUseCase';
import RemoveOfTheCartUseCase from '../use_cases/cart/removeOfTheCartUseCase';
import GetCartOfUserUseCase from '../use_cases/cart/getCartOfUserUseCase';
import { verifyIfIsAnInternalException } from '../util/exceptions';
import AddToCartUseCase from '../use_cases/cart/addToCartUseCase';
import GetAllUseCase from '../use_cases/cart/getAllUseCase';
import authUser, { authAdmin } from '../middlewares/auth';
import express from 'express';

const route = express.Router();

route.post('/add', authUser ,async (req:any, res) => {
  try {
    const cart = new AddToCartUseCase();
    const cartOwner = req.session.user.username;
    await cart.add(cartOwner, {
      name:req.body.name,
      quantity:1
    });
    res.status(201).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.get('/all', authUser, authAdmin ,async (req, res) => {
  try {
    const cart = new GetAllUseCase();
    const cartData = await cart.getAll();
    res.status(200).json(cartData);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.get('/', authUser, async (req:any, res) => {
  try {
    const cart = new GetCartOfUserUseCase();
    const cartOwner = req.session.user.username;
    const cartData = await cart.get(cartOwner);
    res.status(200).json(cartData);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.delete('/', authUser, async (req:any, res) => {
  try {
    const cart = new RemoveOfTheCartUseCase();
    const cartOwner = req.session.user.username;
    const productName = req.body.name;
    await cart.remove(cartOwner, productName);
    res.status(204).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.put('/', authUser, async (req:any, res) => {
  try {
    const cart = new UpdateQuantityOfAProductUseCase();
    const cartOwner = req.session.user.username;
    await cart.updateQuantity({
      name:req.body.name,
      quantity:req.body.quantity
    }, cartOwner);
    res.status(200).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;