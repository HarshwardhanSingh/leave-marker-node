module.exports = (app, db) => {
  app.get('/leaves', (req, res) => {
    res.send(`Hello world, you have just hit /leaves route ${process.env.NODE_ENV}`);
  });
};