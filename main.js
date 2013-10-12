var bubble = (function(document, $) {
	var ballX,
		ballY,
		radi;

	var canvasWidth,
		canvasHeight;

	var timeoutVar,
		counter;

	var scores;

	function drawBall() {
		var canvas = document.getElementById('board');

		var background = $('#game-screen')[0],
			rect = background.getBoundingClientRect();

		var ctx = canvas.getContext('2d');

		canvas.width = rect.width;
		canvas.height = rect.height;

		canvasWidth = rect.width;
		canvasHeight = rect.height;

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

	function touchEvent(evt) {
		console.log('clicked: ' + evt.clientX + " , " + evt.clientY);

        var x1, 
            x2,
            y1,
            y2;

        // 四個角
		x1 = ballX - radi;
		x2 = ballX + radi;		
		y1 = ballY - radi;
		y2 = ballY + radi;	

		// 是否擊中
		if ((evt.clientX > x1) && (evt.clientX < x2)) {
			if ((evt.clientY > y1) && (evt.clientY < y2)) {
				scores = scores + (canvasWidth - radi);

				console.log("Hit. Scores: " + scores);
			}
		}

		// prevent default
		evt.preventDefault();			
	}

	function start() {
		counter = 1;
		scores = 0;

		document.getElementById("game-screen").
					addEventListener("click", touchEvent, false);

		timeoutVar = setTimeout(drawBall, 1000);
	}

	return {
		start: start
	}

}) (document, Sizzle);