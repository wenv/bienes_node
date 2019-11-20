const express = require('express');
const router = express.Router();
const controlles = require('../controllers/customeController');
 
router.get('/', controlles.list);
 router.post('/add', controlles.save );
 router.get('/delete/:id', controlles.delete);
 router.get('/edit/:id', controlles.edit);



module.exports= router;