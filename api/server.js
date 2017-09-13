const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log('App is running on ' + port);
});