var http = require('http');
var url = require('url');
var router = require('./requestHandlers');
var WebSocketServer = require('websocket').server;

var clients = [];

var handlers = {
	"/": router.start,
	"/chat": router.chat
};

var httpServer = http.createServer(function (req, res) {
	var uri = req.url;
	var pathname = url.parse(uri).pathname;
	var querystring = url.parse(uri).query;

	console.log('pathname: ' + pathname + ", query: " + querystring);

	if (typeof handlers[pathname] === 'function') {
		return handlers[pathname](req, res, querystring, clients);
	} else {
		console.log('API not defined');
	}
});

httpServer.listen(8080, '127.0.0.1');

var wsServer = new WebSocketServer({
	httpServer: httpServer,
	autoAcceptConnection: false
});

var onWsConnMessage = function(message) {
	if (message.type === 'utf8') {

		// Output: {"content":"a"}
		console.log('Peer message: ' + message.utf8Data);

		var data = JSON.parse(message.utf8Data);

		// Real-time data push
		var obj = {
			type: 'message',
			data: {
				message: data.content,
				username: 'jollen', 
				timestamp: (new Date()).getTime()
			}
		};

		// Real-time push message
		for (i = 0; i < clients.length; i++) {
			clients[i].sendUTF(JSON.stringify(obj));
		}		
	} else {
		console.log('Unable to handle peer message');
	}
};

var onWsConnClose = function(reasonCode, description) {
	console.log('Peer disconnected with reason: ' + reasonCode);
};

var onWsRequest = function(request) {
	console.log('WebSocket connect requested');

	var connection = request.accept('echo-protocol', request.origin);

	connection.on('message', onWsConnMessage);
	connection.on('close', onWsConnClose);

	clients.push(connection);
};

wsServer.on('request', onWsRequest);

console.log('Server is running.');