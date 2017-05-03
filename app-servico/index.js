const express = require("express");
const app = express();

const config = require("./knexfile");
const env = process.env.NODE_ENV || "development";
const knex = require("knex")(
  config[env]
);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('combined'));

app.post('/salvar', (req,res) => {
  knex('contatos').insert(req.body, 'idcontato').then((ret) => res.send(ret));
});
app.get('/listar', (req,res) => {
  knex('contatos').select().then((ret) => res.send(ret));
});

app.listen(3000);