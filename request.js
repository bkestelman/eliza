function talk() {
	$.ajax("/eliza/DOCTOR", {
		type: "POST",
		data: { human : $('#human').val() },
		dataType: "json"
}).done(function(data) {
	$('#eliza').html(data.eliza);
}).fail(function() {
	$('#eliza').html("Error");
})};
