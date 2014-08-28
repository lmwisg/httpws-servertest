var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  
	// - Make a ws server
	// - Send alert message to client ws server
	// - Close
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

  //res.close();
  
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');