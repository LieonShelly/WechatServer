const express = require('express');
var router = express.Router();
var jsSHA = require('jssha');

router.get('/wx', (req, res) => {
    res.send(req.query);
    console.log(req.query);
    var token = "weixin";
    var signature = req.query.signature;
    var timestamp = req.query.timestamp;
    var echostr = req.query.echostr;
    var nonce = req.query.nonce;
    var oriArray = new Array();
    oriArray[0] = nonce;
    oriArray[1] = timestamp;
    oriArray[2] = token;
    oriArray.sort();
    var original = oriArray.join('');
    var shaObj = new jsShA(original, 'TEXT');
    var scyptoString = shaObj.getHash('SHA-1', 'HEX');
    if (signature == scyptoString) {
        res.send('   //验证成功');
    } else {
        res.send(' //验证失败');
    }

});
module.exports = router;