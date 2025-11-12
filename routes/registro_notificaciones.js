var express = require('express'); 
var router = express.Router(); 
const registro_notificacionesController = require('../controllers').registro_notificacionesController; 
 
router.get('/', registro_notificacionesController.list); 
router.get('/:id', registro_notificacionesController.getById);
router.post('/', registro_notificacionesController.add); 
router.put('/:id', registro_notificacionesController.update); 
router.delete('/:id', registro_notificacionesController.delete); 


 
module.exports = router; 