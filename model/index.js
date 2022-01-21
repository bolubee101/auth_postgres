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
sequelize.authenticate().then(() =>{
  console.log('Database Connected Successfully')
}).catch((error) => {
  console.log('Database Connection Failed', error)
})
