var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/check', function(req, res, next) {
  console.log('/check로 들어옴.. ');
  res.render('index', { title: 'Express' });
});

module.exports = router;
