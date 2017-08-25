const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const userAPI = require('./user/userApi');
const productAPI = require('./user/productAPI');
const employeeAPI = require('./user/employeeApi');
const myLogger = require('./middleware/myLogger');
var fs = require('fs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(myLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/', function (req, res) {
 
  var sample = fs.readFileSync('sample.txt','utf8');
  fs.writeFileSync('output.txt',sample);
  res.send(sample);
});

userAPI(app);
productAPI(app);
employeeAPI(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})