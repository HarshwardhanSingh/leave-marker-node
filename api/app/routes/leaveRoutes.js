module.exports = (app, db) => {
  app.get('/leaves', (req, res) => {
    db.query(`SELECT * FROM Leaves;`, (err, result) => {
      res.send(result)
    });
  });

  app.post('/leaves', (req, res) => {
    db.query(`INSERT INTO Leaves(reason, start, end, type) VALUES ('${req.body.reason}', '${req.body.start}', '${req.body.end}', '${req.body.type}');`, (err, result) => {
      if (err) res.status(err.statusCode || 500).json(err);
      res.status(200).json(result);
    });
  });
};