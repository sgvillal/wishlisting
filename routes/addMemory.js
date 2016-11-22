var data = require("../memoriesdata.json");

exports.addMemory = function(req, res) {
	// Your code goes here
	var tripname = req.query.tripname; 
	var category = req.query.category; 
	var triploc = req.query.triploc;
	var tripdate = req.query.tripdate;
	var trippics = "http://lorempixel.com/400/400/people";
	var tripfriends = req.query.tripfriends;
	var mynotes = req.query.mynotes;
	var newMemory = {"tripname": tripname, "category": category, "triploc": triploc, "tripdate": tripdate, "trippics": trippics, "tripfriends": tripfriends, "mynotes": mynotes};
	console.log(newMemory);
	data.mymemories.unshift(newMemory);
	return res.redirect("/memories");
}
