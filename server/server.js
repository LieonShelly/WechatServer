var express = require('express');
const path = require('path');
const port = "3000";
var app = express();

app.get('/', (req, res) => {
    res.send('express works');
});

app.listen(port, () => {
    console.log('server is running on port' + '3000');
});