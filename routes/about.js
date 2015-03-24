var express = require('express');
var router = express.Router();

/* GET About page. */
router.get('/', function (req, res) {
    res.render('about', { title: 'MRX Member Portal' });
});

module.exports = router;