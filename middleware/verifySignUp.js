// to verify signup actions

const User  = require('../model/user.model');
// const User = db.User

const checkDupUsernameOrEmail = (req, res, next) => {
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

// const verifySignUp = checkDupUsernameOrEmail;

module.exports = checkDupUsernameOrEmail;