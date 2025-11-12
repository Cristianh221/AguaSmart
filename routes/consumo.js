var express = require('express'); 
var router = express.Router(); 
const consumoController = require('../controllers').consumoController; 
 
router.get('/', consumoController.list); 
router.get('/full', consumoController.listFull); 
router.get('/:id', consumoController.getById);
router.post('/', consumoController.add); 
router.put('/:id', consumoController.update); 
router.delete('/:id', consumoController.delete); 


 
module.exports = router; 