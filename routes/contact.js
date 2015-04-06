var express = require('express');
var router = express.Router();

//var restService = require('./restService');

/* GET Contact page. */
router.get('/', function (req, res) {



    //restService.getToken(req.cookies.token, function(data, response) {
    //       if(data.token == "") {
    //
    //       }
    //    } )

    res.render('contact', { title: 'MRX Member Portal' });
});

module.exports = router;