const sequelize = require('sequelize');

const User = sequelize.define('users',{
  username: {
    type: sequelize.STRING
  },
  email: {
    type: sequelize.STRING
  },
  password: {
    type: sequelize.STRING
  }
});

module.exports = User