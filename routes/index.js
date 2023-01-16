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

module.exports = router;