const ClientController = require('../Controllers/ClientController');
module.exports = (app) => {
   app.post('/usuario', ClientController.post);
   app.put('/usuario/:id', ClientController.put);
   app.delete('/usuario/:id', ClientController.delete);
   app.get('/usuarios', ClientController.get);
   app.get('/usuario/:id', ClientController.getById);
}