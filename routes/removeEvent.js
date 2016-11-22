var data = require("../bucketdata.json");

exports.removeEvent = function(req, res) {
	var adventurename = req.query.adventurename; 
	data.mybucketlist.splice(2,1);  //remove 1 item at location 3
	console.log();
	return res.redirect("/bucketlist");
}

