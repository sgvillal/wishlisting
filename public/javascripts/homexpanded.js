var data = require('../../home.json');

var buttonID1;
exports.view = function (req, res){
	buttonID1 = req.query.buttonID;
	console.log('homexpand: ' + req.query['buttonID1']);
	console.log('data: ' + data['myhomepage']);
	res.render('homexpanded', data.myhomepage[buttonID1]); 
	// will only send the first element of the array "myhomepage"
}

exports.view2 = function (req, res){
	var buttonID = req.query.buttonID;
	console.log('homevent: ' + req.query['buttonID']);
	console.log('data: ' + data['myhomepage']);
	res.render('homevent', data.myhomepage[buttonID1].suggestions[buttonID]); 
	// will only send the first element of the array "myhomepage"
}



