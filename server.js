const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/jobthai'));

// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname+'/dist/rsprojectfrontend/index.html'))
// })

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(process.env.PORT || 8080);