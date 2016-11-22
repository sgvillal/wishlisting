var data = require('../../memoriesdata.json');

exports.view = function (req, res){
	console.log(data);
	res.render('memories', data);
}


