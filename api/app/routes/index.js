const leaveRoutes = require('./leaveRoutes');

module.exports = (app, db) => {
  leaveRoutes(app, db);
};