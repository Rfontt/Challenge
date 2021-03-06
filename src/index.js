const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Routes = require('./routes');
const cors = require('cors')
require('./database');
require('dotenv').config();
const path = require('path');

app.use(bodyParser.json());
app.use(Routes);
app.use("/file", express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
app.use(cors());
app.listen(8080);
