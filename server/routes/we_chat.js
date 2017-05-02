const express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.get('/wx', (req, res) => {
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
    var sha1 = crypto.createHash('sha1');
    sha1.update(original);
    var scyptoString = sha1.digest('hex');
    console.log(scyptoString);

    if (signature == scyptoString) {
        res.send('   //验证成功');
    } else {
        res.send(' //验证失败');
    }

});
module.exports = router;