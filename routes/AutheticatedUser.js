var express = require('express');
var router = express.Router();

/* GET Autheticated User page. */
router.get('/', function (req, res) {
    res.render('Welcome ***insert name here***', { title: 'MRX Member Portal' });
});

module.exports = router;