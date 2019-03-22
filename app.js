
var express = require('express');

var mutipart= require('connect-multiparty');








var mutipartMiddeware = mutipart();
var app = express();


app.use(mutipart({uploadDir:'./uptoHere'}));

app.set('port',process.env.PORT || 3000);
app.listen(app.get('port'),function () {
    console.log("started on http://localhost:"+app.get('port')+'; ');
});

app.get('/',function (req,res) {
    res.type('text/html');
    res.sendfile('public/index.html')
});

app.post('/upload',mutipartMiddeware,function (req,res) {
    res.send('成功上传文件');
});








