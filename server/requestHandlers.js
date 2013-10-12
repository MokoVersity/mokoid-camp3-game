var querystring = require('querystring');

var history = [];

function start(req, res, query, clients) {
	console.log('start is called');
};

function chat(req, res, query, clients) {
	var parsedstring = querystring.parse(query);

	console.log('chat is called');
	console.log('Message: ' + parsedstring.content);

	var obj = {
		type: 'message',
		data: {
			message: parsedstring.content,
			username: 'jollen', 
			timestamp: (new Date()).getTime()
		}
	};

	history.push(obj);

	// reduce history[]
	history.slice();

	// Real-time push message
	for (i = 0; i < clients.length; i++) {
		clients[i].sendUTF(JSON.stringify(obj));
	}

	console.log('================HISTORY=============');

	for (i = 0; i < history.length; i++) {
		console.log('MESSAGE-' + i + ': ' + history[i].data.message);
	}

	console.log('================END=============');
};

exports.start = start;
exports.chat = chat;