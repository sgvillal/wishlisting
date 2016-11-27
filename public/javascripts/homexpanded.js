var data = require('../../home.json');
var buttonIDEncrypt;
var buttonID1;
exports.view = function (req, res){
	buttonIDEncrypt = req.query.buttonID;
	buttonIDArray = buttonIDEncrypt.split("5676890");
	buttonID1 = buttonIDArray[0] + buttonIDArray[1];
	console.log('homexpand: ' + buttonID1);
	//console.log('data: ' + data['myhomepage']);
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



