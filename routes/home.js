var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('home', { title: 'MRX Member Portal' });
});

module.exports = router;