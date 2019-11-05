const express = require('express');
const router = express.Router();

const pool= require('../database');

router.get('/add', (rq, res)=>{
    res.render('links/add');
});

router.post('/add',(req ,res)=>{
    console.log(req.body);
    res.send("recibiod");
});

module.exports = router;