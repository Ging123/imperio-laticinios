import { verifyIfIsAnInternalException } from '../util/exceptions';
import SaveUserUseCase from '../use_cases/user/saveUserUseCase';
import express from 'express';

const route = express.Router();

//METHOD TO CREATE AN USER
route.post('/', async (req, res) => {
  try {
    const user = new SaveUserUseCase();
    await user.save(
      req.body.email,
      req.body.username,
      req.body.password
    );
    res.status(201).send();
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;