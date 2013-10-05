var bubble = (function() {
	var canvas,
		ctx;

	function start() {
		canvas = document.getElementById('board');

		ctx = canvas.getContext('2d');

		canvas.width = 480;
		canvas.height = 640;

		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(100, 100, 100, 0, Math.PI * 2, true);
		ctx.fill();
	}

	return {
		start: start
	}

}) ();