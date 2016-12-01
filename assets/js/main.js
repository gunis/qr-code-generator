$(function () {
	var options = {
		// render method: 'canvas', 'image' or 'div'
		render: 'image',

		// version range somewhere in 1 .. 40
		minVersion: 1,
		maxVersion: 40,

		// error correction level: 'L', 'M', 'Q' or 'H'
		ecLevel: 'L',

		// offset in pixel if drawn onto existing canvas
		left: 0,
		top: 0,

		// size in pixel
		size: 200,

		// code color or image element
		fill: '#000',

		// background color or image element, null for transparent background
		background: null,

		// content
		text: $('#qr-code-data').val(),

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

		label: $('#qr-code-data').val(),
		fontname: 'Ubuntu',
		fontcolor: '#FF6600',

		image: null
	};
	$('#qr-code-cover').qrcode(options);

	$('#qr-code-data').keyup(function() {
		options['label'] = options['text'] = $('#qr-code-data').val();
		$('#qr-code-cover')
			.html('')
			.qrcode(options);
	});
});