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
	response.writeHead(200, {'Content-Type': 'images/png'});
	var myReadStream = fs.createReadStream(_dirname + '/bucketlist.html', 'utf8');
	myReadStream.pipe(res);
});

server.listen(3000);
console.log('listening to port 3000');