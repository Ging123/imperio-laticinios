import express from 'express';

const route = express.Router();
const addressController = require('./src/controllers/addressController');
const cartController = require('./src/controllers/cartController');
const orderController = require('./src/controllers/orderController');
const productController = require('./src/controllers/productController');
const userController = require('./src/controllers/userController');

//ALL ROUTES THAT THIS API IS USING
route.use('/address', addressController);
route.use('/cart', cartController);
route.use('/order', orderController)
route.use('/product', productController);
route.use('/user', userController);

export default route;