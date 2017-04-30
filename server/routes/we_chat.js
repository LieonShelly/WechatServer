const express = require('express');
var router = express.Router();

router.get('/wx', (req, res) => {
    res.send(req.query);
    console.log(req.query);
});
module.exports = router;