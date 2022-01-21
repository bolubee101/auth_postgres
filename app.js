const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors')
const authRouter = require('./routes/auth.routes')

const app = express();
// require('./routes/auth.routes')(app);
app.use((req, res, next) => {
  res.header (
    'Access-control-Allow-headers', 'x-access-token, Origin, Content-Type, Accept'
  );
  next();
});
app.use(cors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: true }))
app.use('/api/auth',authRouter)

require('./model/index')


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`)
});