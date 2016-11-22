$(document).ready(function () {
	console.log('document ready');

	initialize();
});

function initialize() {
	var button = "#memExpanded";

	$(button + '0').click(function (e) {
		console.log('first button clicked');

		window.location.href = '/memExpanded?buttonID=0';
	});

	$(button + '1').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/memExpanded?buttonID=1';
	});

	$(button + '2').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/memExpanded?buttonID=2';
	});
	$(button + '3').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/memExpanded?buttonID=3';
	});
	$(button + '4').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/memExpanded?buttonID=4';
	});
	$(button + '5').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/memExpanded?buttonID=5';
	});
	$(button + '6').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/memExpanded?buttonID=6';
	});
	$(button + '7').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/memExpanded?buttonID=7';
	});
	$(button + '8').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/memExpanded?buttonID=8';
	});
	$(button + '9').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/memExpanded?buttonID=9';
	});
	$(button + '10').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/memExpanded?buttonID=10';
	});
	$(button + '11').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/memExpanded?buttonID=11';
	});
	$(button + '12').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/memExpanded?buttonID=12';
	});
	
}