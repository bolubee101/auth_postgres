const db = require('../model');
const config = require('../config/auth.config');
const User = db.user;

// const Op = db.Sequelize.Op;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signUp = (req, res) =>{
  User.create({
    username: req.nody.username,
    email: req.body.email,
    password: bcrypt.hash(req.body.password, 10)
  }).then(() =>{
    res.status(200).send({
      message: 'User was Registered successfully'
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })

};

const signIn = (req, res) =>{
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if(!user) {
      return res.status(400).send({
        message: 'User not Found!'
      })
    }

    let passwordIsValid = bcrypt.compare(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!'
      })
    }

    let token = jwt.sign({ id: user.id}, config.secret, {
      expiresIn: 86400 //24hrs
    });

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      accessToken: token 
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
};

module.exports = { signUp, signIn }