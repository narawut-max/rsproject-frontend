// const express= require('express');

// const path=require('path');

// const app=express();

// app.use(express.static(__dirname+'/dist/jobthai'));

// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname+'/dist/rsprojectfrontend/index.html'))
// })

// app.listen(process.env.PORT || 8080);

// ===================================================================================

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '/rsprojectfrontend/dist/jobthai/')));

app.use(bodyParser.json());

app.use(cors());



 const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }}app.use(forceSSL());

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname + '/rsprojectfrontend/dist/jobthai/index.html'));
     });

 app.listen(port, () => {
  console.log('Server started on port '+port);
  });
