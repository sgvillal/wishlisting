$(document).ready(function () {
	console.log('document ready');

	initialize();
});

function initialize() {
	var button = "#bucketExpanded";
	var i;
	/* for (i = 0; i < 100; i++) { 
		$(button + i).click(function (e) {
			console.log('button ' + i + ' button clicked');

			window.location.href = '/bucketExpanded?buttonID='+i;
		});
	} */
	$(button + '0').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/bucketExpanded?buttonID=0';
	});

	$(button + '1').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/bucketExpanded?buttonID=1';
	});

	$(button + '2').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/bucketExpanded?buttonID=2';
	});
	$(button + '3').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/bucketExpanded?buttonID=3';
	});
	$(button + '4').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/bucketExpanded?buttonID=4';
	});
	$(button + '5').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/bucketExpanded?buttonID=5';
	}); 
	$(button + '6').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/bucketExpanded?buttonID=6';
	});
	$(button + '7').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/bucketExpanded?buttonID=7';
	});
	$(button + '8').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/bucketExpanded?buttonID=8';
	});
	$(button + '9').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/bucketExpanded?buttonID=9';
	});
	$(button + '10').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/bucketExpanded?buttonID=10';
	});
	$(button + '11').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/bucketExpanded?buttonID=11';
	});
}