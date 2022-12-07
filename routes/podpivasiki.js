var express = require('express');
var router = express.Router();

/* GET podpivasiki listing. */
router.get('/', function(req, res, next) {
  res.send('new router for routes that start with "podpivasiki"');
});

module.exports = router;

router.get("/:nick", function(req, res, next) {
  res.send(req.params.nick);
});