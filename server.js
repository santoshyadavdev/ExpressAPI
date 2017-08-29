const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const userAPI = require('./user/userApi');
const productAPI = require('./user/productAPI');
const employeeAPI = require('./user/employeeApi');
const myLogger = require('./middleware/myLogger');
var fs = require('fs');
var mongoClient = require('mongodb').MongoClient;
ObjectID = require('mongodb').ObjectID;

app.use(myLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoClient.connect('mongodb://localhost:27017/API', function (err, db) {
  userAPI(app);
  productAPI(app);
  employeeAPI(app, db, ObjectID);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/', function (req, res) {

  var sample = fs.readFileSync('sample.txt', 'utf8');
  fs.writeFileSync('output.txt', sample);
  res.send(sample);
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})