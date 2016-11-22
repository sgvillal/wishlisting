var data = require('../../bucketdata.json');

var buttonID1;

exports.view = function (req, res){
	buttonID1 = req.query.buttonID;
	console.log('Bucketlist Expand: ' + req.query['buttonID1']);
	console.log('data: ' + data['mybucketlist']);
	res.render('bucketexpanded', data.mybucketlist[buttonID1]); 
	// will only send the first element of the array "myhomepage"
}
