var express = require('express')
var router = express.Router()
var Bara = require("../models/bara").Bara




router.get('/', function(req, res, next) {
    Bara.find({},{_id:0,title:1,nick:1},function(err,menu){
        req.session.greeting = "Session started"
        res.render('index', {
                                title: 'Baratroom',
                                counter: req.session.counter
                            });
    })

});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Log in'});
    

    });

    /* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password


});


module.exports = router;