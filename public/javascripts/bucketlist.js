'use strict';

$(document).ready(function(){
	initializePage();
})

function initializePage(){
	$(".select").click(select);
}

function select(){
	console.log('REPLACED ALERT' + ($(this).attr("id")));
	$.get("/bucketdata", function(response){
		var name = $(this).closest('.project').attr('id');
		for(var k = 0; k < response.length; ++k){
			if(name == data[0][k]['adventurename']){
				data[0][k]['selected'] = 0;
			} else {
				data[0][k]['selected'] = 1;
			}
		}
		$.post('/javascripts/bucketlist.js', response, function(){
			alert("Object saved");
		});
	});
	//location.href = "bucket_expand";
}


 /* $(document).ready(function(){
	console.log('ready');
	function select(){
	console.log('BLAH');
	//console.log('TRYING TO SELECT EVENT: ' + name);
	for(var k = 0; k < data.length; ++k){
		if(name == data[k]['adventurename']){
			//data[k]['selected'] = 0;
			data[k]['selected'] = 1;
		}
		else {
			//data[k]['selected']  = 1;
			data[k]['selected'] = 0;
		}
		console.log('Trying to select event: ' + name);
	}
	//console.log(data);
	console.log('IN SELECT');
	location.href = "bucketExpanded" ;
	}


$(".select").click(function(){
	alert($(this).attr("id"));
});  

function deleteEvent(name){
	for(var k = 0; k < data.length; ++k){
		if(name == data[k]['adventurename']){
			data[k]['delete'] = 1;
		}
	}
}  */
	
	
//});
