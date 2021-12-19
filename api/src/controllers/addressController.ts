import { verifyIfIsAnInternalException } from '../util/exceptions';
import InsertUseCase from '../use_cases/address/insertUseCase';
import GetUseCase from '../use_cases/address/getUseCase';
import authUser from '../middlewares/auth';
import express from 'express';

const route = express.Router();

route.post('/', authUser, async (req:any, res) => {
  try {
    const address = new InsertUseCase();
    await address.insert (
      req.session.user.username,
      req.body.address
    );
    res.status(201).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});        

route.get('/', authUser, async (req:any, res) => {
  try {
    const address = new GetUseCase();
    const userAddress = await address.get(req.session.user.username);
    res.status(200).json(userAddress);
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});                         

module.exports = route;