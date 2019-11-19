const express = require('express');
const router = express.Router();
const controlles = require('../controllers/customeController');
 
router.get('/', controlles.list);


module.exports= router;