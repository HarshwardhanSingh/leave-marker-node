const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const config = require('./config')();

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  multipleStatements: true
});

connection.connect((err) => {
  if(err) throw err;
  require('./app/routes')(app, connection);
  app.listen(port, () => {
    console.log('App is running on ' + port);
  });
});