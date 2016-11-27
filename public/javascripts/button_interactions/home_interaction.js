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

		window.location.href = '/homeExpanded?buttonID=56768900';
	});

	$(button + '1').click(function (e) {
		console.log('second button clicked');

		window.location.href = '/homeExpanded?buttonID=56768901';
	});

	$(button + '2').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=56768902';
	});
	$(button + '3').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=56768903';
	});
	$(button + '4').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=56768904';
	});
	$(button + '5').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=56768905';
	}); 
	$(button + '6').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=56768906';
	}); 
	$(button + '7').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=56768907';
	}); 
	$(button + '8').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=56768908';
	}); 
	$(button + '9').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=56768909';
	}); 
	$(button + '10').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=567689010';
	}); 
	$(button + '11').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=567689011';
	}); 
	$(button + '12').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=567689012';
	}); 
	$(button + '13').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=567689013';
	}); 
	$(button + '14').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=567689014';
	}); 
	$(button + '15').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=567689015';
	}); 
	$(button + '16').click(function (e) {
		console.log('third button clicked');

		window.location.href = '/homeExpanded?buttonID=567689016';
	}); 
}