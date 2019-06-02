const router = require("express").Router();
const chat = require('./chat.js');

router.get('/', function(req, res,next) {
	// router.('/',chat.online_chat);
  	res.sendFile( __dirname + 'index.html');
  	next();
});

router.post('/',function(req,res,next) {
	chat.online_chat();
	next();
});


module.exports = router;
