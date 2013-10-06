var http = require('http');
var url = require('url');
var router = require('./requestHandlers');

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
		return handlers[pathname](req, res, querystring);
	} else {
		console.log('API not defined');
	}
});

httpServer.listen(8080, '127.0.0.1');

console.log('Server is running.');