var express = require('express')
var router = express.Router()
var Bara = require("../models/bara").Bara
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('New router for routes starting with podpivasiki');
});

/* Страница котят */
router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                Bara.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Bara.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var bara = result[0]
            var baras = result[1] || []
            if(!bara) return next(new Error("There was no such baratroom, maybe you made a mistake in your request?"))
            res.render('bara', {
                title: bara.title,
                picture: bara.avatar,
                desc: bara.desc,
                menu: baras
            });
        })
})

module.exports = router
