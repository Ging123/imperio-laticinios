require('dotenv').config(); 
import connectToMoongo from './src/configs/moongose';
import bodyParser from "body-parser";
import express from 'express';
import routes from './routes';
import cors from 'cors';

const session = require('express-session')
const app = express();
const port = 8000;
const store = new session.MemoryStore();

//MIDDLEWARES
app.use(cors({
  origin:process.env.CLIENT_URL!,
  credentials:true
}));
app.use( 
  session({
    secret: process.env.SESSION_SECRET!,
    name: 'cookie',
    resave: true,
    saveUninitialized: true,
    store: store
  })
)
app.use(bodyParser.json());
app.use(routes);

//METHOD TO CONFIG ALL THINGS BEFORE START THE SERVER
!(async function config() {
  try {
    await connectToMoongo();
    app.listen(port, () => console.log(`The server start in the port ${port}`));
  }
  catch(err:unknown) {
    console.log(err);
  }
})(); 