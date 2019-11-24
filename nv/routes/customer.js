const express = require('express');
const router = express.Router();
const controlles = require('../controllers/customeController');
 
router.get('/', controlles.open);
router.get('/pedido',controlles.pedido);
router.post('/add/ped', controlles.saveped);
router.get('/tabped',controlles.tabped);
router.post('/add/tabped',controlles.savetab_ped);

 router.post('/add', controlles.save );
 router.get('/delete/:id', controlles.delete);
 router.get('/update/:id', controlles.edit);
 router.post('/edit/:id', controlles.update);


module.exports= router;