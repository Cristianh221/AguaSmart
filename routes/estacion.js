var express = require('express'); 
var router = express.Router(); 
const estacionController = require('../controllers').estacionController; 
 
router.get('/', estacionController.list); 
router.get('/full', estacionController.listFull);
router.post('/', estacionController.add); 
router.put('/:id', estacionController.update); 
router.delete('/:id', estacionController.delete); 


 
module.exports = router; 