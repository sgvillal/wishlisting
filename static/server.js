var PORT = 3000;

var http = require('http');
var fs = require('fs');

/* var server = 
	http.createServer(
		function(request,response) {
			console.log('got a request!');
			response.write('hi');
			response.end();
	});
 */
var server = http.createServer(

function (request, response){

	console.log('request was made: ' + request.url);

	response.writeHead(200, {'Content-Type': 'text/html'});
	var myReadStream = fs.createReadStream(__dirname + '/Bucketlist.html', 'utf8');
	myReadStream.pipe(response);
});

server.listen(3000);
console.log('listening to port 8000');
