const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors')


const app = express();
// require('./routes/auth.routes')(app);
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: true }));


require('./routes/auth.routes')(app);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT}`)
});