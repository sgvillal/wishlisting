var data = require('../../home.json');

exports.view = function (req, res){
	var buttonID = req.query.buttonID;
	console.log(req.query['buttonID']);
	console.log('data: ' + data['myhomepage']);
	res.render('homevent', data.myhomepage[buttonID]); 
	// will only send the first element of the array "myhomepage"
}


