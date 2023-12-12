const express = require('express');

const app = express();

app.get('/i',function(req,res){
    const id = req.query.id;
    res.send('hello ' + id);
});

app.get('/hi/:id',function(req,res){
    const id = req.params.id;
    res.send('hey ' + id);
});

app.listen(9000, function(req,res) {
   console.log('running...');
});