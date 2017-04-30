let express = require('express');
let router = express.Router();
let wx = require('./we_chat');

router.use('/', wx);

module.exports = router