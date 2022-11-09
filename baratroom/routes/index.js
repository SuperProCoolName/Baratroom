var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Standart baratroom */
router.get('/standart', function(req, res, next) {
  res.send("<h1>Standart Baratroom page</h1>")
});

/* Fury baratroom */
router.get('/fury', function(req, res, next) {
  res.send("<h1>Fury Baratroom page</h1>")
});

/* DotA-AllStars baratroom */
router.get('/dota1', function(req, res, next) {
  res.send("<h1>DotA1 Baratroom page</h1>")
});

module.exports = router;
