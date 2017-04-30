var express = require('express');
const http = require('http');
const path = require('path');
const handler = require('./webhook');
const port = "3000";
let router = require('./routes/we_chat');
var app = express();

app.get('/', (req, res) => {
    res.send('express works');
});
app.get('/gittestwebhook', (req, res) => {
    res.send('webhook success');
});
app.use('/', router);
app.use((req, res, next) => {
    handler(req, res, error => {
        res.send('no such location');
    });
});
app.listen(port, () => {
    console.log('server is running on port' + '3000');
});