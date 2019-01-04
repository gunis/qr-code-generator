$(function () {
	var dataInputSelector = '#qr-code-data';
	var dataInput = $(dataInputSelector);
	var canvasIdentifier = 'canvas-id';
	var options = {
		// render method: 'canvas', 'image' or 'div'
		render: 'canvas',

		// version range somewhere in 1 .. 10
		minVersion: 5,

		// error correction level: 'L', 'M', 'Q' or 'H'
		ecLevel: 'H',

		// offset in pixel if drawn onto existing canvas
		left: 0,
		top: 0,

		// size in pixel
		size: 200,

		// code color or image element
		fill: '#000',

		// background color or image element, null for transparent background
		background: '#FFFFFF',

		// content
		text: dataInput.val(),

		// corner radius relative to module width: 0.0 .. 0.5
		radius: 0,

		// quiet zone in modules
		quiet: 0,

		// modes
		// 0: normal
		// 1: label strip
		// 2: label box
		// 3: image strip
		// 4: image box
		mode: 2,

		mSize: 0.1,
		mPosX: 0.5,
		mPosY: 0.5,

		label: dataInput.val(),
		fontname: 'Ubuntu',
		fontcolor: '#FF6600',

		image: null
	};

	$('#qr-code-cover').qrcode(options);

	var downloadCanvas = function(link, filename) {
		$('#qr-code-cover canvas').attr('id', canvasIdentifier)
		link.href = document.getElementById(canvasIdentifier).toDataURL();
		link.download = filename;
	}

	dataInput.keyup(function() {
		options['label'] = options['text'] = dataInput.val();
		$('#qr-code-cover')
			.html('')
			.qrcode(options);
	});

	$('#download-btn').on('click', function() {
		downloadCanvas(this, 'qr-code.png');
	});
});