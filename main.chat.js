var chat = (function($) {
	var ws;

	function init() {
		ws = new WebSocket('ws://static.moko365.com:8080', 'echo-protocol');

		ws.onopen = function(evt) {
			alert("open");
		}

		ws.onmessage = function(evt) {
			var obj = JSON.parse(evt.data),
				bid = obj.data.bid,
				timestamp = obj.data.timestamp;

			$('#price').html('<p>' + bid + ', ' + timestamp + '</p>');
		}
	}

	return {
		init: init
	}

}) ($);