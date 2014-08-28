var http = require('http');
var url = require('url');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;

//	response.send('Hello World!');
	response.send(query);
  
  /*
	var ipaddress = 'http://192.168.0.121';
	var port = 8081;
	ipaddress = ipaddress + ":" + port;
	
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	console.log(query.attackid);

	var WebSocket = require('ws')
	  , ws = new WebSocket(ipaddress);
	ws.on('open', function() {
		// Send attack alert, with: sessionid and attackdata
		ws.send('alert;' + process.argv[2] + ";" + process.argv[3]);
		ws.close();
	});  
  */
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})