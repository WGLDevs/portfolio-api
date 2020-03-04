
const emailSend = require('./email');
const app = require('express')();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('App On!');
  
  });

app.post('/sendEmail', function(req, res) {
     let data = req.body;
     let name = data.Name;
     let email = data.Email;
     let message = data.Message;

     emailSend(name, email, message);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });