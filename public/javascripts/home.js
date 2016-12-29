var data = require('../../home.json');
var data2 = require('../../airBB.json');

exports.view = function (req, res){
	console.log(data);
	res.render('home', data);
}

exports.view1 = function (req, res){
	console.log(data);
	res.render('home_airBB', data2);
}


