const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const db = mysql.createConnection({

  host: "localhost",

  user: "MATTHIEU",

  password: "23Mg.1982"

});

const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/article');

db.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/groupomaniafriend/auth', userRoutes);
app.use('/groupomaniafriend/articles', articleRoutes);

module.exports = app;