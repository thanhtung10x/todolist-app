const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const db = require('./config/db');
const Route = require('./routes');

//connect to DB
db.connect();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Router init
Route(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})