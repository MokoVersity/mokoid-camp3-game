var querystring = require('querystring');

function start(req, res, query) {
	console.log('start is called');
};

function chat(req, res, query) {
	console.log('chat is called');

	var parsedstring = querystring.parse(query);
	console.log('Message: ' + parsedstring.m);

};

exports.start = start;
exports.chat = chat;