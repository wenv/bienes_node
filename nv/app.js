const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConection = require('express-myconnection');
//import router
const custome = require('./routes/customer');

const app = express();



//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));


//midedlewares
app.use(morgan('dev'));
app.use(myConection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'simple',
    port: 3306,
    database: 'data_bienes'
}, 'single'));

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', custome);

//static files
app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'), () => {
    console.log('server')
});