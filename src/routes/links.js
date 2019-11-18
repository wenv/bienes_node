const express = require('express');
const router = express.Router();

const pool= require('../database');

router.get('/add',  (rq, res)=>{
    res.render('links/add');
});

router.post('/add', async (req ,res)=>{
    //console.log(req.body);
    const {title, url, description}=(req.body);
    const newlink = {
        title,
        url,
        description
    };
    console.log(newlink); 
    try {
        await pool.query('INSERT INTO links set ?', [newlink]);
    res.send("recibiod");
    } catch (error) {
        console.log(error);
    }
  
});

module.exports = router;