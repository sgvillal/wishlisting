var data = require("../login.json");

exports.createAccount = function(req, res) {
	var username = req.query.username; 
	var password = req.query.password; 
	var newUser = {"username": username, "password": password};
	console.log(newUser);
	data.mylogin.push(newUser);
	return res.redirect("/ ");
}

