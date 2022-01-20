const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors')
require('./routes/auth.routes')(app);

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: true }));





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`)
});