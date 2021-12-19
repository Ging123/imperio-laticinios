import { verifyIfIsAnInternalException } from '../util/exceptions';
import SaveUserUseCase from '../use_cases/user/saveUserUseCase';
import LoginUseCase from '../use_cases/user/loginUseCase';
import express from 'express';
import authUser from '../middlewares/auth';

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

//METHOD TO LOGIN
route.post('/login', async (req:any, res) => {
  try {
    const user = new LoginUseCase();
    const userData = await user.login(
      req.body.emailOrUsername,
      req.body.password
    );
    req.session.user = userData;
    res.status(200).json({
      id:req.session.user._id,
      email:req.session.user.email,
      username:req.session.user.username,
      role:req.session.user.role
    }); 
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

//METHOD TO GET AN USER
route.get('/', authUser, async (req:any, res) => {
  try {
    res.status(200).json({
      id:req.session.user._id,
      email:req.session.user.email,
      username:req.session.user.username,
      role:req.session.user.role
    }); 
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

//METHOD TO LOGOUT AN USER
route.delete('/logout', authUser, async (req:any, res) => {
  try {
    req.session.destroy();
    res.status(204).send(); 
  }
  catch(err:any) {
    err = verifyIfIsAnInternalException(err);
    res.status(err.status).json(err.message);
  }
});

module.exports = route;