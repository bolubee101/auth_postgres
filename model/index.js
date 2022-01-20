const Sequelize = require('sequelize');
const config = require('../config/db.config.js')

const sequelize = new Sequelize ( 
  config.DB, 
  config.USER, 
  config.PWD, 
  {
    host: config.HOST,
    dialect: config.dialect
  }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('../model/user.model.js')(sequelize. Sequelize);

module.exports = db;