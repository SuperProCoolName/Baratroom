var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница стандартного бары */
router.get('/standart', function(req, res, next) {
  res.send("<h1>Страница standart</h1>")
});

/* Страница скина fury на бару*/
router.get('/fury', function(req, res, next) {
  res.send("<h1>Страница fury</h1>")
});

/* Страница бары из 1 доты*/
router.get('/dota1', function(req, res, next) {
  res.send("<h1>Страница dota1</h1>")
});

module.exports = router;
