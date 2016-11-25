$(document).ready(function () {
	console.log('document ready');

	initialize();
});

function initialize() {
	var button = "#homeExpanded";
	var i;
	/* for (i = 0; i < 100; i++) { 
		$(button + i).click(function (e) {
			console.log('button ' + i + ' button clicked');

			window.location.href = '/homeExpanded?buttonID='+i;
		});
	*/ //fix this
	
	$(button + '0').click(function (e) {
		console.log('first button clicked');

		window.location.href = '/homeExpanded?buttonID=0';
	});

	$(button + '1').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/homeExpanded?buttonID=1';
	});

	$(button + '2').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=2';
	});
	$(button + '3').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=3';
	});
	$(button + '4').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=4';
	});
	$(button + '5').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=5';
	}); 
	$(button + '6').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=6';
	}); 
	$(button + '7').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=7';
	}); 
	$(button + '8').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=8';
	}); 
	$(button + '9').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=9';
	}); 
	$(button + '10').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=10';
	}); 
	$(button + '11').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=11';
	}); 
	$(button + '12').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=12';
	}); 
	$(button + '13').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=13';
	}); 
	$(button + '14').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=14';
	}); 
	$(button + '15').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=15';
	}); 
	$(button + '16').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=16';
	}); 
}