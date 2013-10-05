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

		$('#message').click(function() {
            var content = $("#content").val();

            console.log("Content: " + content);

            var obj = {
            	content: content
            };

            ws.send(JSON.stringify(obj));
		});
	}

	return {
		init: init
	}

}) ($);