const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://edilson:edilson@cluster0-njnjs.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// METODOS HTTP: GET, POST, PUT, DELETE

//TIPOS DE PARAMETROS

//QUERY PARAMS: request.query (Filtros, ordenação, paginação, ...)
//ROUTE PARAMS: request.params(Identificar um recurso na alteração ou remoção)
//BODY: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

