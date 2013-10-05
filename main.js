var bubble = (function() {
	var ballX,
		ballY,
		radi;

	var timeoutVar,
		counter;

	function drawBall() {
		var canvas = document.getElementById('board');

		var background = Sizzle('#game-screen')[0],
			rect = background.getBoundingClientRect();

		var ctx = canvas.getContext('2d');

		canvas.width = rect.width;
		canvas.height = rect.height;

		ballX = Math.floor(Math.random() * 300);
		ballY = Math.floor(Math.random() * 500);
		radi = Math.floor(Math.random() * 100) + 30;

		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(ballX, ballY, radi, 0, Math.PI * 2, true);
		ctx.fill();

		if (counter >= 10) {
			clearTimeout(timeoutVar);
		} else {
			counter = counter + 1;
			timeoutVar = setTimeout(drawBall, 1000);
		}
	}

	function start() {
		counter = 1;

		timeoutVar = setTimeout(drawBall, 1000);
	}

	return {
		start: start
	}

}) ();