var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Standart baratroom */
router.get('/standart', function(req, res, next) {
  res.render("podpivas", {
    title: "Standart Baratroom",
    picture: "images/standart.jpg",
    desc: "Standart Baratroom (Podpivas) from DotA 2"
  });
});

/* Fury baratroom */
router.get('/fury', function(req, res, next) {
    res.render('podpivas', {
    title: "Fury_Baratroom",
    picture: "images/fury.jpg",
    desc: "Skin 'Fury' Baratroom (Podpivas) from DotA 2"

  });
});

/* DotA-AllStars baratroom */
router.get('/dota1', function(req, res, next) {
  res.render("podpivas", {
    title: "Old Baratroom",
    picture: "images/dota1.jpg",
    desc: "Old Baratroom (Podpivas) from DotA 1"
  });
});

module.exports = router;
