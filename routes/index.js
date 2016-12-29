var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/' });
var data = require('../home.json');

//var bucketlist = require('./bucketlist_route');
//var bucketlist_expanded = require('./bucketlist_get_json');
//var bucketlistexpanded = require('../public/javascripts/bucketlistexpanded');
var home = require('../public/javascripts/home');
//var home1 = require('../public/javascripts/home');
var homexpanded = require('../public/javascripts/homexpanded');
var homevent = require('../public/javascripts/homevent');

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Just Go' });
}); */

router.get('/users', function(req, res, next) {
  res.send('respond with a resourse');
});

router.get('/detail', function(req, res, next) {
  res.send('detail');
});
/* router.get('/bucketlist', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/bucketlist.html');
	//router.get('/', bucketlist.view);
	//res.render('layout');
}); */
//router.get('/bucketlist', bucketlist.view);
//router.get('/bucketExpanded', bucketlistexpanded.view);
//router.get('/', login.view);
router.get('/masterhomepage123', home.view);
router.get('/Universal_airBB', home.view1);
router.get('/homeExpanded', homexpanded.view);
router.get('/homeExpanded2', homexpanded.view2);
router.get('/homeEvents', homexpanded.view2);


router.get('/', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/login.html');
	//res.render('layout');
});

router.get('/newUser', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/newUser.html');
	//res.render('layout');
});

router.get('/homeExpand', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/homexpand.html');
	 //res.render('index', {category: 'Halloween'});
});

router.get('/homeEvent', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/homeevent.html');
	 //res.render('index', {category: 'Halloween'});
});




/* router.get('/bucketExpanded', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/bucketexpanded.html');
	 //res.render('index', {category: 'Halloween'});
}); */
/* router.get('/home', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/home.html');
	//res.render('layout');
}); */

/* router.get('/memories', function(req, res, next) {

	console.log('request was made: ' + req.url);
	res.sendFile(__dirname + '/memories.html');
	//res.render('layout');

}); */

module.exports = router;
