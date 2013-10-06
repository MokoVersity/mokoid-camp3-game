var http = require('http');
var url = require('url');

var start = function() {
	console.log('start is called');
};

var chat = function() {
	console.log('chat is called');
};

var handlers = {
	"/": start,
	"/chat": chat
};

var httpServer = http.createServer(function (req, res) {
	var uri = req.url;
	var pathname = url.parse(uri).pathname;
	var querystring = url.parse(uri).query;

	console.log('pathname: ' + pathname + ", query: " + querystring);

	if (typeof handlers[pathname] === 'function') {
		return handlers[pathname]();
	} else {
		console.log('API not defined');
	}
});

httpServer.listen(8080, '127.0.0.1');

console.log('Server is running.');