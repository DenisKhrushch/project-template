require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors());

const dbConnection = mongoose.connection;
dbConnection
    .on('error', err => console.log(`Connection error: ${err}`))
    .once('open', () => console.log('Connected to DB!'));

app.listen(process.env.PORT, err => {
    err ? console.log(err) : console.log('Server started on port', process.env.PORT)
})