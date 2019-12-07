const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//settings
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//importing routes
const indexRoutes = require('./routes/index.js');

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port:3306,
    database: 'crud_mysql'
}, 'single'));

//Routes
app.use('/', indexRoutes);  

app.listen(app.get('port'), () =>{
    console.log('Server on port 3000');
});

