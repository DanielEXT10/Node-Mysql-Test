const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//importing routes
const indexRoutes = require('./routes/index.js');

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '961Ap101*1',
    port:3306,
    database: 'crud_mysql'
},  'single'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', indexRoutes); //ejecutamos las rutas amacenadas en index.js 

//static files
app.use(express.static(path.join(__dirname, 'public')));
//Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});

