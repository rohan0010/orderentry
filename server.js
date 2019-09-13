var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.use('/',express.static('public'));

app.listen(port, function(){
    console.log("Server running on " + port);
})