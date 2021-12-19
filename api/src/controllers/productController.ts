import { verifyIfIsAnInternalException } from '../util/exceptions';
import GetByTagUseCase from '../use_cases/product/getByTagUseCase';
import GetAllUseCase from '../use_cases/product/getAllUseCase';
import InsertUseCase from '../use_cases/product/insertUseCase';
import UpdateUseCase from '../use_cases/product/updateUseCase';
import DeleteUseCase from '../use_cases/product/deleteUseCase';
import authUser, { authAdmin } from '../middlewares/auth';
import GetUseCase from '../use_cases/product/getUseCase';
import express from 'express';

const route = express.Router();

route.post('/', authUser, authAdmin, async (req:any, res) => {
  try {
    const product = new InsertUseCase();
    await product.save({
      name:req.body.name,
      quantity:req.body.quanty,
      description:req.body.description,
      tag:req.body.tag,
      price:req.body.price
    });
    res.status(201).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.put('/', authUser, async (req:any, res) => {
  try {
    const product = new UpdateUseCase();
    await product.update({
      name:req.body.name,
      quantity:req.body.quanty,
      description:req.body.description,
      tag:req.body.tag,
      price:req.body.price
    });
    res.status(200).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.get('/all', authUser, async (req:any, res) => {
  try {
    const product = new GetAllUseCase();
    const allProducts = await product.getAll();
    res.status(200).json(allProducts);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.get('/', authUser, async (req:any, res) => {
  try {
    const product = new GetUseCase();
    const productFound = await product.get(req.body.name);
    res.status(200).json(productFound);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.get('/byTag', authUser, async (req:any, res) => {
  try {
    const product = new GetByTagUseCase();
    const productsFound = await product.getByTag(req.body.name);
    res.status(200).json(productsFound);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

route.delete('/', authUser, authAdmin, async (req:any, res) => {
  try {
    const product = new DeleteUseCase();
    await product.delete(req.body.name);
    res.status(204).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;