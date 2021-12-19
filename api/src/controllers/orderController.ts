import { verifyIfIsAnInternalException } from '../util/exceptions';
import CreateUseCase from '../use_cases/order/createUseCase';
import GetAllUseCase from '../use_cases/order/getAllUseCase';
import RemoveUseCase from '../use_cases/order/removeUseCase';
import authUser, { authAdmin } from '../middlewares/auth';
import express from 'express';

const route = express.Router();

route.post('/', authUser, async (req:any, res) => {
  try {
    const order = new CreateUseCase();
    await order.create(req.session.user.username);
    res.status(201).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.get('/', authUser, authAdmin ,async (req, res) => {
  try {
    const order = new  GetAllUseCase();
    const orders = await order.getAll();
    res.status(200).json(orders);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.delete('/', async (req, res) => {
  try {
    const order = new RemoveUseCase();
    await order.remove(req.body.id);
    res.status(204).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;