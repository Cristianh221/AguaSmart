var express = require('express'); 
var router = express.Router(); 
const usuarioController = require('../controllers').usuarioController; 
 
router.get('/', usuarioController.list); 
router.get('/:id', usuarioController.getById);
router.post('/', usuarioController.add); 
router.put('/:id', usuarioController.update); 
router.delete('/:id', usuarioController.delete); 


 
module.exports = router; 