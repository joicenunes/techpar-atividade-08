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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers",
          "Content-Type, Content-Length, Range, Content-Range, Accept-Ranges, If-None-Match, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-My-Custom-Header, X-Filename");
  res.header("Access-Control-Expose-Headers",
          "Content-Type, Content-Length, Range, Content-Range, Accept-Ranges, If-None-Match, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-My-Custom-Header, X-Filename");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD');
  next();
});

app.post('/salvar', (req,res) => {
  knex('contatos').insert(req.body, 'idcontato').then((ret) => res.send(ret));
});
app.get('/listar', (req,res) => {
  console.log("Oi c:");
  knex('contatos').select().then((ret) => res.send(ret));
});

app.listen(3000);