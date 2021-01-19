require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./src/routes')

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.log("Erro: ", error.message);
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`Rodando em ${process.env.BASE}`);
});