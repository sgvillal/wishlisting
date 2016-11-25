var data = require('../../home.json');

exports.view = function (req, res){
	console.log(data);
	res.render('home', data);
}

exports.view1 = function (req, res){
	console.log(data);
	res.render('home1', data);
}


