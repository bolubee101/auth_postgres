
// const verifySignUp = require('../middleware');
const controller = require('../controllers/auth.controller');
const  checkDupUsernameOrEmail  = require('../middleware/verifySignUp');

module.exports = ((app) => {
  app.use((req, res, next) => {
    res.header (
      'Access-control-Allow-headers', 'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/auth/signup',checkDupUsernameOrEmail, controller.signUp);

  app.post('api/auth/signin', controller.signIn)
})