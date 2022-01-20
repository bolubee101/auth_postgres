const Sequelize = require('sequelize');
const config = require('../config/db.config')

const sequelize = new Sequelize ( 
  config.DB, 
  config.USER, 
  config.PWD, 
  {
    host: config.HOST,
    dialect: config.dialect
  }
)
// require('./user.model')(Sequelize, sequelize);
// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.User = require('./user.model')(sequelize. Sequelize);


// module.exports = db;