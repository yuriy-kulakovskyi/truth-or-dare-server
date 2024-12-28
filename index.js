require('dotenv').config({ path: '.env.local' });

const express = require('express');
const cors = require('cors');
const routes = require('./services/routes');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

mongoose.connect(process.env.MONGO_URL).then(() => console.log("Mongo connection established")).catch((err) => console.log("Mongo connection failed: ", err.message))