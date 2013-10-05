var chat = (function($) {
	var ws;

	function init() {
		ws = new WebSocket('ws://static.moko365.com:8080', 'echo-protocol');

		ws.onopen = function(evt) {
			console.log('websocket opened');
		}

		ws.onmessage = function(evt) {
			console.log(evt.data);

			var obj = JSON.parse(evt.data),
				keyPairs = obj.data;

			$('#priceTemplate').tmpl(keyPairs).appendTo('#priceList');
		}
	}

	return {
		init: init
	}

}) ($);