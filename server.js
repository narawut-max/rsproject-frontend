const express= require('express');

const path=require('path');

const app=express();

app.use(express.static(__dirname+'/dist/rsprojectfrontend'));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname+'/dist/rsprojectfrontend/index.html'))
})

app.listen(process.env.POST || 9090);