var express = require('express')
var router = express.Router()
var Bara = require("../models/bara").Bara
var User = require('../models/user').User



router.get('/', function(req, res, next) {
    Bara.find({},{_id:0,title:1,nick:1},function(err,menu){
        req.session.greeting = "Session started"
        res.render('index', {
                                title: 'Baratroom',
                                counter: req.session.counter
                            });
    })

});

router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
  });

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Log in', error:null});
    

    });

    /* POST login/registration page. */
router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    User.findOne({username:username},function(err,user){
        if(err) return next(err)
        if(user){
            if(user.checkPassword(password)){
                req.session.user = user._id
                res.redirect('/')
            } else {
                      res.render('logreg', {title: 'Log in', error:"Password is incorrect"})
            }
        } else {
            var user = new User({username:username,password:password})
            user.save(function(err,user){
                if(err) return next(err)
                req.session.user = user._id
                res.redirect('/')
            })        
      }
    })
});


module.exports = router;