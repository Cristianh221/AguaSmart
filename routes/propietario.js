var express = require('express'); 
var router = express.Router(); 
const propietarioController = require('../controllers').propietarioController; 
 
router.get('/', propietarioController.list); 
router.get('/:id', propietarioController.getById);
router.post('/', propietarioController.add); 
router.put('/:id', propietarioController.update); 
router.delete('/:id', propietarioController.delete); 


 
module.exports = router; 