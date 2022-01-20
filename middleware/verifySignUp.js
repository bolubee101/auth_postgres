// to verrify signup actions

const db = require('../model');
const User = db.user

checkDupUsernameOrEmail = (req, res, next) => {
  // username
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if(user) {
      res.status(400).send({
        message: 'Username is already Taken!'
      });
      return
    }
  })
    // email
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if(user) {
      res.status(400).send({
        message: 'Email in Use!'
      })
    }
  })
  
  next();
}

const verifySignUp = {
  checkDupUsernameOrEmail: checkDupUsernameOrEmail
};

module.exports = verifySignUp;