var data = require("../login.json");

exports.userlogin = function(req, res) {

  var username = req.query.username; 
  var password = req.query.password; 
  var newEvent = {"username": username, "password": password};
  
  authenticate(username, password);

  function authenticate(username, password){ 
    console.log(data.mylogin.length);
    console.log(username);
    console.log(password);
    for (var i = 0; i < data.mylogin.length; i++){
      console.log(data.mylogin[i].username);
      console.log(data.mylogin[i].password);
      if (data.mylogin[i].username == username && data.mylogin[i].password == password){
        return res.redirect("/masterhomepage123");
      }
    }
    return res.send('Login failed, please try again');
  } 
}
 
 
/*function check(username, password){
  $.each(data.mylogin, function(i, v) {
    if (i.name.search(new RegExp(/username/i)) != -1) {
      if(v.name.search(new RegExp(/password/i)) != -1){
        window.alert('Login Completed');
        return;
      }
    }
  })
}*/

/*function authenticate(username, password) {
          $.ajax({
            type: "POST",
            url: "../login.json",
            dataType: 'json',
            async: false,
            data: {"username": username, "password": password},
            success: function (data) {
              window.alert('Login status:' + data.status);
            }
          })
      });*/


/*$(function(){
        var SomeModel = Backbone.Model.extend({});

        someModel = new SomeModel();
        someModel.bind("change", function(model, collection){
          alert("You set some_attribute to " + model.get('some_attribute'));
        });

        someModel.set({some_attribute: "some value"});

        var Credentials = Backbone.Model.extend({});

        var LoginView = Backbone.View.extend({
          el: $("#login-form"),

          events: {
            "click #login": "login"
          },

          initialize: function(){
            var self = this;

            this.username = $("#username");
            this.password = $("#password");

            this.username.change(function(e){
              self.model.set({username: $(e.currentTarget).val()});
            });

            this.password.change(function(e){
              self.model.set({password: $(e.currentTarget).val()});
            });
          },

          login: function(){
            var user= this.model.get('username');
            var pword = this.model.get('password');
            alert("You logged in as " + user + " and a password of " + pword);
            return false;
          }
        });

        window.LoginView = new LoginView({model: new Credentials()});
      });
    </script>*/

/*var attempt = 3;
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "Formget" && password == "formget#123"){
		alert ("Login successfully");
		window.location = "success.html"; // Redirecting to other page.
		return false;
	}
	else{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){	
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
	}
}*/

