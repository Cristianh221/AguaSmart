var express = require('express'); 
var router = express.Router(); 
const estado_estacionController = require('../controllers').estado_estacionController; 
 
router.get('/', estado_estacionController.list); 
router.get('/:id', estado_estacionController.getById);
router.post('/', estado_estacionController.add); 
router.put('/:id', estado_estacionController.update); 
router.delete('/:id', estado_estacionController.delete); 


 
module.exports = router; 