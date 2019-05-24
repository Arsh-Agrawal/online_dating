var express = require('express');
var router = express.Router();

const chat = require('./chat.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile( __dirname + 'index.html');
});


module.exports = router;
