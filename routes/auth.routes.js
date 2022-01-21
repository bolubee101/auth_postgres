// const verifySignUp = require('../middleware');
const express = require('express');
const controller = require('../controllers/auth.controller');
const  checkDupUsernameOrEmail  = require('../middleware/verifySignUp');
let authRouter = express.Router()

authRouter.post('/signup',checkDupUsernameOrEmail, controller.signUp);

authRouter.post('/signin', controller.signIn)

module.exports = authRouter