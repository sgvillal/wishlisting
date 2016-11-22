var data = require('../../bucketlistdata.json');

exports.view = function (req, res){
	console.log(data);
	res.render('bucketlist', data);
}