var express = require('express');
var router = express.Router();

// accounts list
router.get('/account', function(req, res, next) {
  res.render('list');
});

// add record
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

module.exports = router;
