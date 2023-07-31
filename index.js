const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const port = 3000;

const morgan = require('morgan');
const bodyParser = require('body-parser');
const { get, Server } = require('http');
const res = require('express/lib/response');
const { MongoClient } = require('mongodb');
const url =  'mongodb+srv://mariam:<47579281>@cluster0.pqzz34m.mongodb.net/?retryWrites=true&w=majority';

app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) 
}) 

app.get('/index' , (req,res) => {
    res.render('hola')
})

app.post('/index' , (req,res) => {
    const nombre = req.body.Nombre;
    const editorial = req.body.Editorial;
    const año = req.body.Año;
    const genero = req.body.genero;
    const Publico_destinados = req.body.Publico_destinados
    const datos = [nombre,editorial,año,genero,Publico_destinados]
    console.log(datos);
}) 

MongoClient.connect(url, function(err, client) {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    
    }
console.log('Conexión exitosa a la base de datos');
    })
