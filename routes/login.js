var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('partials/login', { title: 'Login' });
});

module.exports = router;
