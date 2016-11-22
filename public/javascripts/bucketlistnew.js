var data = require('../../bucketdata.json');

exports.view = function (req, res){
	console.log(data);
	res.render('bucketlistnew', data);
}


