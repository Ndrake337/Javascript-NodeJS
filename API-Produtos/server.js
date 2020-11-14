const express = require('express');
const mongoose = require('mongoose');// conectando o mongoose para usar o mongodb
const requireDir = require('require-dir');
const cors = require('cors')

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
//iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true}
);
requireDir('./src/models');

const Product = mongoose.model('Product');

app.use('/api', require("./src/routes"))

app.listen(3001);