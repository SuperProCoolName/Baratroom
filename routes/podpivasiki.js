var express = require('express');
var router = express.Router();
var Bara = require('../models/bara').Bara


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('New router for routes starting with podpivasiki');
});

module.exports = router;

/* Page of baratrooms */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});
router.get('/:nick', function(req, res, next) {
    Bara.findOne({nick:req.params.nick}, function(err,bara){
        if(err) return next(err)
        if(!bara) return next(new Error("There was no such baratroom, maybe you made a mistake in your request?"))
        res.render('bara', {
            title: bara.title,
            picture: bara.avatar,
            desc: bara.desc
        })
    })
})


module.exports = router;