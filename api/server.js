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

const setupDb = (connection) => {
  connection.query(
    `
      CREATE DATABASE IF NOT EXISTS leavemarker;
      USE leavemarker;
      CREATE TABLE IF NOT EXISTS Leaves(
      leaveId INT PRIMARY KEY AUTO_INCREMENT,
      reason VARCHAR(255) NOT NULL,
      start DATETIME NOT NULL,
      end DATETIME NOT NULL,
      type ENUM ('FULL', 'HALF') NOT NULL
    );`, (err, result) => {
    if (err) throw err;
    require('./app/routes')(app, connection);
  })
}

connection.connect((err) => {
  if(err) throw err;
  setupDb(connection);
  app.listen(port, () => {
    console.log('App is running on ' + port);
  });
});